# ETS Complexe Business — React website

A responsive, bilingual French/English React website for ETS Complexe Business. French is the default language. The six routed pages are Home, About, Services, Products & Supplies, References, and Contact / Quote.

## Requirements

- Node.js 20.19+ (Node.js 22 LTS recommended)
- npm 10+

## Install and run

From the extracted project root (the folder containing this `README.md`):

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

For a clean install from the lockfile and production build:

```bash
npm ci
npm run build
```

The production-ready static site is written to `dist/`. Use `npm run preview` to preview that build locally.

## Source structure

```text
src/
├── App.jsx                    # Router and shared site layout
├── content.js                 # French and English copy
├── main.jsx                   # React entry point
├── styles.css                 # Responsive site styles
├── components/                # Shared navigation, footer, cards, and quote UI
├── context/
│   └── LanguageContext.jsx    # Shared language state and persistence
└── pages/                     # One module per routed page
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Products.jsx
    ├── References.jsx
    └── Contact.jsx
public/images/                 # Local logo and site/product imagery
```

## Project notes

- Uses React, Vite, React Router, and Lucide icons; **pnpm is not required**.
- The logo and website imagery are bundled in `public/images/` and load locally.
- The shared navigation language toggle switches between French and English; the selection is saved in the browser.
- Contact details use phone **670 000 000** and provisional email **contact@etscomplexebusiness.com**.
- The quote form opens a pre-addressed email draft in the visitor's default mail application. The source package does not include a server-side form or deployment configuration.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies from `package-lock.json` |
| `npm ci` | Perform a clean lockfile-based install |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
