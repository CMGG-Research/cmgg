import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

import sharp from 'sharp';

import { HIGHLIGHT_INTERVAL_MS, highlights } from '../src/data/highlights.ts';
import { alumni, collaborators, currentResearchers } from '../src/data/people.ts';
import { manuscripts, projects } from '../src/data/projects.ts';
import { publications } from '../src/data/publications.ts';
import { researchPillars } from '../src/data/research.ts';
import { site } from '../src/data/site.ts';

const publicRoot = resolve('public');
const sourceRoot = resolve('src');
const allowedEmail = 'zahid.ahmed@giki.edu.pk';
const errors = [];
const checkedImages = new Set();
const imageMetadata = new Map();

function report(condition, message) {
  if (!condition) errors.push(message);
}

function requireText(value, label) {
  report(typeof value === 'string' && value.trim().length > 0, `${label} must not be empty.`);
}

function requireStringArray(value, label) {
  report(Array.isArray(value) && value.length > 0, `${label} must contain at least one item.`);
  if (Array.isArray(value)) {
    value.forEach((item, index) => requireText(item, `${label}[${index}]`));
  }
}

function requireUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    const normalized = String(value).trim().toLowerCase();
    if (seen.has(normalized)) errors.push(`Duplicate ${label}: ${value}`);
    seen.add(normalized);
  }
}

function requireLink(value, label) {
  requireText(value, label);
  report(
    typeof value === 'string' && (value.startsWith('/') || value.startsWith('https://')),
    `${label} must be an internal path beginning with / or an HTTPS URL.`,
  );
}

function metadataFor(path) {
  if (!imageMetadata.has(path)) imageMetadata.set(path, sharp(path).metadata());
  return imageMetadata.get(path);
}

async function checkImage(image, alt, label, expectedWidth, expectedHeight) {
  requireText(image, `${label} image`);
  requireText(alt, `${label} image alternative text`);

  if (typeof image !== 'string' || !image.startsWith('/') || image.includes('..')) {
    errors.push(`${label} image must be a root-relative public path without parent traversal.`);
    return;
  }

  const file = resolve(publicRoot, image.slice(1));
  if (!file.startsWith(publicRoot) || !existsSync(file)) {
    errors.push(`${label} image does not exist: ${image}`);
    return;
  }

  checkedImages.add(image);
  try {
    const metadata = await metadataFor(file);
    report(
      Boolean(metadata.width && metadata.height),
      `${label} image dimensions could not be read.`,
    );
    if (expectedWidth !== undefined) {
      report(metadata.width === expectedWidth, `${label} imageWidth does not match ${image}.`);
    }
    if (expectedHeight !== undefined) {
      report(metadata.height === expectedHeight, `${label} imageHeight does not match ${image}.`);
    }
  } catch (error) {
    errors.push(`${label} image could not be inspected: ${error.message}`);
  }
}

function walk(directory) {
  const files = [];
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

report(
  HIGHLIGHT_INTERVAL_MS === 2000,
  'HIGHLIGHT_INTERVAL_MS must remain set to 2,000 milliseconds.',
);
report(highlights.length === 5, 'The homepage slider must contain exactly five highlights.');

requireUnique(
  highlights.map((highlight) => highlight.id),
  'highlight id',
);
await Promise.all(
  highlights.map(async (highlight, index) => {
    const label = `Highlight ${index + 1} (${highlight.id})`;
    requireText(highlight.id, `${label} id`);
    report(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(highlight.id), `${label} id is not URL-safe.`);
    requireText(highlight.eyebrow, `${label} eyebrow`);
    requireText(highlight.title, `${label} title`);
    requireText(highlight.summary, `${label} summary`);
    requireText(highlight.linkLabel, `${label} link label`);
    requireLink(highlight.href, `${label} link`);
    report(
      Number.isInteger(highlight.imageWidth) && highlight.imageWidth > 0,
      `${label} imageWidth must be a positive integer.`,
    );
    report(
      Number.isInteger(highlight.imageHeight) && highlight.imageHeight > 0,
      `${label} imageHeight must be a positive integer.`,
    );
    await checkImage(
      highlight.image,
      highlight.imageAlt,
      label,
      highlight.imageWidth,
      highlight.imageHeight,
    );
  }),
);

requireUnique(
  researchPillars.map((pillar) => pillar.id),
  'research pillar id',
);
await Promise.all(
  researchPillars.map(async (pillar, index) => {
    const label = `Research pillar ${index + 1} (${pillar.id})`;
    requireText(pillar.title, `${label} title`);
    requireText(pillar.summary, `${label} summary`);
    requireStringArray(pillar.questions, `${label} questions`);
    requireStringArray(pillar.methods, `${label} methods`);
    requireStringArray(pillar.applications, `${label} applications`);
    if (pillar.image) await checkImage(pillar.image, pillar.imageAlt, label);
  }),
);

const people = [...currentResearchers, ...alumni, ...collaborators];
requireUnique(
  people.map((person) => person.name),
  'person name',
);
people.forEach((person, index) => {
  const label = `Person ${index + 1} (${person.name})`;
  requireText(person.name, `${label} name`);
  report(/^[A-Z]{1,4}$/.test(person.initials), `${label} initials must contain 1–4 capitals.`);
  requireText(person.role, `${label} role`);
  requireText(person.institution, `${label} institution`);
  requireText(person.status, `${label} status`);
  requireText(person.research, `${label} research`);
});

requireUnique(
  projects.map((project) => project.slug),
  'project slug',
);
projects.forEach((project, index) => {
  const label = `Project ${index + 1} (${project.slug})`;
  report(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug), `${label} slug is not URL-safe.`);
  requireText(project.title, `${label} title`);
  requireText(project.summary, `${label} summary`);
  requireStringArray(project.description, `${label} description`);
  requireStringArray(project.methods, `${label} methods`);
  requireStringArray(project.themes, `${label} themes`);
});
requireUnique(manuscripts, 'manuscript title');
manuscripts.forEach((title, index) => requireText(title, `Manuscript ${index + 1} title`));

requireUnique(
  publications.filter((publication) => publication.doi).map((publication) => publication.doi),
  'publication DOI',
);
publications.forEach((publication, index) => {
  const label = `Publication ${index + 1} (${publication.title})`;
  report(
    Number.isInteger(publication.year) && publication.year >= 1900 && publication.year <= 2100,
    `${label} year is invalid.`,
  );
  requireStringArray(publication.authors, `${label} authors`);
  requireText(publication.title, `${label} title`);
  requireText(publication.journal, `${label} journal`);
  requireText(publication.theme, `${label} theme`);
  if (publication.doi) {
    report(
      /^10\.\d{4,9}\/\S+$/i.test(publication.doi),
      `${label} DOI must be stored without an https://doi.org/ prefix.`,
    );
  }
});

report(site.email === allowedEmail, `The public site email must remain ${allowedEmail}.`);
site.profiles.forEach((profile, index) => {
  requireText(profile.label, `Profile ${index + 1} label`);
  report(profile.href.startsWith('https://'), `Profile ${index + 1} must use HTTPS.`);
});
site.navigation.forEach((item, index) => {
  requireText(item.label, `Navigation item ${index + 1} label`);
  report(item.path.startsWith('/'), `Navigation item ${index + 1} must use an internal path.`);
});

const sourceFiles = walk(sourceRoot).filter((file) =>
  ['.astro', '.js', '.json', '.mjs', '.ts'].includes(extname(file)),
);
for (const file of sourceFiles) {
  const content = readFileSync(file, 'utf8');
  const emails = content.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  for (const email of emails) {
    if (email.toLowerCase() !== allowedEmail) {
      errors.push(`Unapproved public email in ${relative(sourceRoot, file)}: ${email}`);
    }
  }
}

const publicDocuments = walk(publicRoot).filter((file) =>
  /\.(?:doc|docx|pdf|ppt|pptx|xls|xlsx)$/i.test(file),
);
publicDocuments.forEach((file) =>
  errors.push(`Private-document safeguard: remove public/${relative(publicRoot, file)}.`),
);

if (errors.length > 0) {
  console.error(
    `Content integrity checks failed:\n${errors
      .sort()
      .map((error) => `- ${error}`)
      .join('\n')}`,
  );
  process.exit(1);
}

console.log(
  `Content integrity checks passed: ${highlights.length} highlights, ${researchPillars.length} research pillars, ${people.length} people, ${projects.length} projects, ${publications.length} publications, and ${checkedImages.size} referenced images.`,
);
