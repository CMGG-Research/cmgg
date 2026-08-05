# Computational Mathematics & Geodynamics Group website

The public website for the Computational Mathematics & Geodynamics Group (CMGG), led by Dr. Zahid Ahmed at the Ghulam Ishaq Khan Institute of Engineering Sciences and Technology in Pakistan.

Live site: <https://zahidahmed121.github.io/cmgg/>

## Technology stack

- Astro with static output
- TypeScript in strict mode
- Semantic HTML and modern CSS
- Minimal client-side JavaScript for the mobile navigation and publication filter
- GitHub Actions and GitHub Pages

The site does not use a database, server-side backend, analytics, cookies, a third-party form service, or externally hosted fonts and icons.

## Local installation

Use a current stable Node.js release and npm.

```bash
npm install
npm run dev
```

Astro serves the project under the configured `/cmgg/` base path.

## Development and validation

```bash
npm run format
npm run lint
npm run check
npm run build
npm run validate:html
npm run check:links
npm run validate
```

`npm run assets` regenerates `public/og.png` from the editable, code-native social-card source.

## Editing content

Most public content is kept in structured TypeScript files under `src/data/`:

- `site.ts` â€” group identity, navigation, profile links, and group-head information
- `research.ts` â€” research pillars
- `people.ts` â€” current researchers, alumni, and the prepared collaborators model
- `projects.ts` â€” project directions and manuscripts in preparation
- `publications.ts` â€” verified peer-reviewed publication metadata
- `teaching.ts` â€” course areas, computational toolkit, and the future-resource model

### Add a person

Add a new object to `currentResearchers` or `alumni` in `src/data/people.ts`. Supply only verified names, roles, institutions, dates, and research titles. The `collaborators` array is intentionally empty until verified names and roles are available.

### Add a publication

Add a new object to `publications` in `src/data/publications.ts`. Preserve author order and verify the title, year, journal, and DOI against Crossref, the DOI resolver, or the official publisher page. Manuscripts in preparation must remain separate.

### Add a project

Add an object to `projects` in `src/data/projects.ts`. Keep descriptions evidence-based and avoid unpublished numerical results unless they have been explicitly approved for release.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and on manual dispatch. A quality job first runs the complete validation suite with Node.js 24 and a clean `npm ci` installation. After validation succeeds, the workflow uses the official Astro and GitHub Pages actions to build the static site, upload the Pages artifact, and deploy it to the `github-pages` environment.

The Astro `site` and `base` values are configured for:

`https://zahidahmed121.github.io/cmgg/`

## Asset and privacy rules

- Do not commit the private source CV, phone number, secondary email address, or other unnecessary personal information.
- Use only supplied and authorized photographs and research figures.
- Do not add the GIKI logo without an authorized asset.
- Do not list co-authors as group collaborators without explicit confirmation.
- Clearly distinguish completed work, ongoing research, manuscripts in preparation, and developing directions.
- Do not add an open-source license to academic content without the ownerâ€™s approval.

## Maintenance checklist

1. Verify all new facts and publication metadata.
2. Run `npm run validate`.
3. Review every changed page at desktop and mobile widths.
4. Check keyboard navigation, visible focus, and link labels.
5. Confirm internal links work under `/cmgg/`.
6. Regenerate the social card if the core message changes.
7. Push to `main` and confirm the Pages deployment succeeds.
8. Inspect the live home page and at least two interior pages.
