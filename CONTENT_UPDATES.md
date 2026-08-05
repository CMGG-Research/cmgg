# Updating CMGG website content

This guide explains how to submit or publish verified updates without changing the website layout. The public site is generated from structured TypeScript files and deployed automatically by GitHub Pages.

## Recommended: submit a content-update request

This is the easiest option when you do not want to edit code.

1. Open the `cmgg` repository on GitHub.
2. Select **Issues**, then **New issue**.
3. Choose **CMGG content update**.
4. Select the content type and provide the exact approved wording.
5. Add a reliable verification source, such as a DOI, publisher page, official institutional page, or approved document.
6. Drag authorized images into the image field when needed.
7. Submit the request for implementation and review.

Do not upload the private source CV, telephone numbers, secondary email addresses, unpublished results, or images without permission.

## Edit directly on GitHub

Repository maintainers can make small updates through the GitHub website:

1. Open the relevant file listed below.
2. Select the pencil icon (**Edit this file**).
3. Make one focused change.
4. Check spelling, links, dates, and publication status.
5. Commit the change to `main` with a clear message.
6. Open the **Actions** tab and wait for the Pages deployment to succeed.
7. Inspect the changed page at <https://cmgg-research.github.io/cmgg/>.

For larger changes, edit locally and run `npm run validate` before pushing.

## Where content lives

| Content                                 | File                       | Public location         |
| --------------------------------------- | -------------------------- | ----------------------- |
| Homepage carousel                       | `src/data/highlights.ts`   | Home page highlights    |
| Research themes                         | `src/data/research.ts`     | Home and Research pages |
| Current researchers and alumni          | `src/data/people.ts`       | People page             |
| Projects and manuscripts in preparation | `src/data/projects.ts`     | Projects page           |
| Peer-reviewed publications              | `src/data/publications.ts` | Publications page       |
| Teaching areas and resources            | `src/data/teaching.ts`     | Teaching page           |
| Group identity and profile links        | `src/data/site.ts`         | Site-wide content       |
| Approved public images                  | `public/images/`           | Image assets            |

## Add a homepage highlight

Add an object to the `highlights` array in `src/data/highlights.ts`:

```ts
{
  id: 'short-unique-id',
  eyebrow: 'Publication',
  title: 'Exact verified title',
  summary: 'One concise sentence explaining the update.',
  image: '/images/homepage/approved-image.webp',
  imageWidth: 1600,
  imageHeight: 900,
  imageAlt: 'A factual description of the relevant visual content.',
  href: '/publications/',
  linkLabel: 'View the publication',
},
```

Use a unique lowercase `id`. Keep the summary short enough to fit comfortably on mobile. Internal links must begin with `/`; the carousel component applies the `/cmgg/` base path automatically.

The automatic rotation interval is controlled by `HIGHLIGHT_INTERVAL_MS` in the same file. It is currently set to 2,000 milliseconds.

## Add a researcher or alumnus

Add an object to `currentResearchers` or `alumni` in `src/data/people.ts`:

```ts
{
  name: 'Verified full name',
  initials: 'VN',
  role: 'PhD Researcher',
  institution: 'GIKI',
  status: '2026 · In progress',
  research: 'Exact approved research title or description',
},
```

Do not invent biographies, profile links, email addresses, dates, or affiliations. Photographs require explicit authorization.

## Add a peer-reviewed publication

Add an object to `publications` in `src/data/publications.ts`:

```ts
{
  year: 2026,
  authors: ['First Author', 'Z. Ahmed', 'Third Author'],
  title: 'Exact article title',
  journal: 'Exact journal name',
  volume: '12',
  issue: '3',
  pages: '100–115',
  doi: '10.xxxx/example',
  theme: 'Fluid dynamics',
},
```

Preserve author order. Verify the year, title, journal, volume, issue, pages, DOI, and publication status using the DOI resolver, Crossref, or the official publisher page. Omit fields that cannot be verified. Never place a manuscript in preparation in this list.

If a future publication needs a new research theme, a developer should also update the `PublicationTheme` type and the Publications-page filter options.

## Add or update a project

Projects are objects in `src/data/projects.ts`. Use a unique `slug`, evidence-based descriptions, verified methods, and accurate status wording. Do not disclose unpublished numerical results without explicit approval.

Manuscript titles under `manuscripts` must remain clearly identified as research in progress until formal publication is verified.

## Upload an image

1. Use an image supplied or explicitly authorized for publication.
2. Remove private metadata where appropriate.
3. Prefer WebP for photographs or detailed raster illustrations.
4. Use a descriptive lowercase filename, for example `mantle-model-verification.webp`.
5. For carousel images, a landscape image near 16:9 and approximately 1600 × 900 pixels is recommended.
6. Upload homepage images to `public/images/homepage/`.
7. Record the image's real pixel width and height in the data object.
8. Write useful alternative text that describes the image without overstating its scientific status.

Do not label a conceptual illustration as a simulation result. Real figures should include an informative caption and must not reveal unpublished results without approval.

## Verification before publication

Run:

```bash
npm run validate
```

For a fast check of structured content, image references, DOI formatting, and privacy safeguards, run `npm run check:content`.

Then verify:

- the changed page on desktop and mobile;
- internal links under the `/cmgg/` base path;
- external and DOI links;
- image loading, dimensions, alternative text, and permission;
- spelling of names, titles, institutions, and dates;
- the GitHub Pages workflow and the final live page.

## Privacy and scientific-integrity checklist

- Publish only the institutional email address `zahid.ahmed@giki.edu.pk`.
- Never publish telephone numbers, secondary email addresses, or the private source CV.
- Do not add grants, awards, collaborators, vacancies, facilities, datasets, or software unless verified.
- Clearly separate peer-reviewed publications, ongoing research, and manuscripts in preparation.
- Do not use the GIKI logo or personal photographs without authorized assets.
- Do not present conceptual imagery as measured data or a published simulation result.
