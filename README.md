# Suraj Kapare — Data Science Portfolio

A complete, responsive portfolio built with **Next.js App Router, TypeScript, and Tailwind CSS**. The site presents Suraj’s work through the questions he investigated, the methods he used, and the results he can substantiate.

**Suggested repository name:** `suraj-kapare-data-science-portfolio`

## Candidate positioning

| Attribute | Decision |
| --- | --- |
| Primary role | Data Scientist |
| Seniority | Junior / early career |
| Strongest evidence | Predictive modeling, model evaluation, interpretable computer vision, SQL-based customer analytics, and cloud NLP |
| Rationale | An M.S. in Data Science, one data analyst internship, and graduate team projects support an early-career data scientist profile. The documents do not establish senior engineering or production system ownership. |
| Professional tagline | Messy data. Clear decisions. |

## What’s included

- A recruiter-focused introduction with a real model comparison and project scale.
- Three featured case studies: urban aesthetics, passenger satisfaction, and an AWS sentiment pipeline.
- Expandable project details covering the question, contribution, outcome, and scope.
- About, experience, education, certifications, skills, and contact sections.
- Dark and light themes with saved preferences and an initial theme script to avoid a color flash.
- Responsive navigation, keyboard access, visible focus states, reduced-motion support, and a custom 404 page.
- Working email and LinkedIn links, clipboard feedback, and both supplied résumé PDFs.
- Locally bundled fonts, custom SVG favicon, title/description metadata, and social text metadata.
- A package lockfile and GitHub Actions build/type-check workflow.

No API keys, account connections, database, environment variables, or third-party runtime services are required. Contact uses the visitor’s email application; it does not pretend to submit a form.

## Local setup

Use **Node.js 22 LTS** and npm. Next.js requires at least Node.js 20.9. The `.nvmrc` file selects Node.js 22 for nvm users.

Open a terminal in this folder and run:

```bash
npm install && npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

The development command binds explicitly to the local loopback address. If port 3000 is occupied, use:

```bash
npm run dev -- --port 3001
```

## Build and validation

```bash
npm run typecheck
npm run build
```

To inspect the production build locally after building:

```bash
npm start -- --hostname 127.0.0.1
```

`npm ci` installs exactly the dependency versions recorded in `package-lock.json` and is used by the included CI workflow.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage composition and supporting sections |
| `app/layout.tsx` | Fonts, document metadata, and initial theme |
| `app/globals.css` | Responsive design, color tokens, and motion |
| `app/not-found.tsx` | Custom 404 view |
| `components/header.tsx` | Navigation and theme controls |
| `components/model-chart.tsx` | Accurate, accessible model comparison |
| `components/project-card.tsx` | Project visuals and expandable case studies |
| `components/copy-email.tsx` | Clipboard action with success/failure feedback |
| `components/icons.tsx` | Small inline icons |
| `components/section-heading.tsx` | Shared section heading component |
| `lib/content.ts` | Profile, case studies, and skill groups |
| `public/resume/` | Downloadable copies of the supplied résumés |
| `public/favicon.svg` | Custom portfolio icon |
| `docs/content-notes.md` | Source mapping and editorial decisions |
| `.github/workflows/ci.yml` | Automated type check and production build |
| `tailwind.config.ts` | Explicit Tailwind theme configuration |
| `next.config.js` | Next.js configuration |

## Editing the content

Edit `lib/content.ts` to change the contact details, projects, project metrics, or skill groups. Supporting experience and education copy lives in `app/page.tsx`. Change the CSS custom properties at the top of `app/globals.css` to adjust both color themes.

Replace the files in `public/resume/` when the résumés change. Keep their names or update their paths in `lib/content.ts`. The PDF downloads are the original supplied documents; website copy is rewritten separately.

Only add project repository or live-demo links after confirming their actual URLs. None were provided in the source PDFs, so the site does not include invented GitHub links, dead demo buttons, or placeholder destinations.

## Content accuracy

All project metrics come from the supplied documents, except the explicitly derived **8 percentage-point** difference between 96% and 88%. No speculative metrics or unmeasured commercial outcomes are presented as facts. Team projects are labeled accordingly. See [content notes](docs/content-notes.md) for the source mapping and caveats.

The original PDFs are included only as résumé downloads. The LinkedIn profile PDF is used as a source and is not republished as a site download. No visitor analytics or tracking scripts are included.

## Dependencies and assets

Next.js and React are pinned; the lockfile fixes the full dependency tree. Fonts come from the `@fontsource/dm-sans` and `@fontsource/space-grotesk` packages and are bundled locally by the build. Their upstream license files are included with those packages when installed.

## Validation completed

The delivered source passed `npm run build` and `npm run typecheck`. Browser checks covered 320, 390, 768, 1024, and 1440 pixel widths, 200% text enlargement, both themes and saved preferences, all three case studies, mobile navigation and Escape handling, clipboard copying, résumé downloads, and the 404 page. Development and production rendering were checked without browser page errors.
