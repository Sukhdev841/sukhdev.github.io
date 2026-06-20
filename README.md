# sukhdev.github.io

A simple static website for **custom car sticker design**. No build step or framework; just HTML, CSS and a little vanilla JavaScript hosted on GitHub Pages.

## Pages

- `index.html` — Home: logo, hero background, an "About me" photo, and contact (Email, Phone, Instagram).
- `designs.html` — Sticker designs with a **search box** (filter by name, category or ID). Each sticker has a unique **ID** that customers quote when ordering.
- `pastwork.html` — A collage of completed work, newest first.

## Brand name (single source of truth)

The brand name is a placeholder, **"PunjabStickers"**, defined **once** in `js/site.js`
(`BRAND_NAME`). Change it there and it updates everywhere automatically: the header logo,
the footers, and every page `<title>`. In the HTML, brand placeholders are written as
`<span data-brand></span>`, and each page sets its title label via `data-page-title` on `<body>`.

## Theme / colours

The colour theme is centralized as CSS custom properties (variables) at the top of
`css/style.css` (the `:root` block). Adjust the accent, brand and neutral colours there to
re-theme the whole site from one place.

## Branding assets (replace these with your own)

- `assets/logo.svg` — your website logo (shown in the header).
- `assets/hero-bg.svg` — the home page hero background image.
- `assets/me.svg` — your own photo (shown in the About section).

## Image folders

### `stickers/`
One image per sticker. **The file name is the sticker's ID**, in the human-readable form
`<name>-<category>-<XXX-YYY>` (e.g. `blazing-flames-fire-A1B-7Z9.svg`). The same ID is shown
on `designs.html`, so the image name and the shown ID always match, and customers can search
by name, category or ID. To add a sticker: drop the image in `stickers/` named with its ID and
add a matching card in `designs.html`. See `stickers/README.md`.

### `featured-work/`
Photos of completed jobs. Prefix file names with the date (`YYYY-MM-DD-...`) so the Featured Work
page can show the **newest first**. No IDs or captions are shown. See `featured-work/README.md`.

## Contact

The contact details in the HTML are placeholders — update the email, phone number, and
Instagram handle in `index.html` (and the footers) with your real details.

