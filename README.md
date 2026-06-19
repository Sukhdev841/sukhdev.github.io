# sukhdev.github.io

A simple static website for **Sukhdev — custom car sticker design**. No build step or framework; just HTML and CSS hosted on GitHub Pages.

## Pages

- `index.html` — Home: logo, hero background, an "About me" photo, and contact (Email, Phone, Instagram).
- `designs.html` — Sticker designs. Each sticker has a unique **ID** that customers quote when ordering.
- `pastwork.html` — A collage of completed work, newest first.

## Branding assets (replace these with your own)

- `assets/logo.svg` — your website logo (shown in the header).
- `assets/hero-bg.svg` — the home page hero background image.
- `assets/me.svg` — your own photo (shown in the About section).

## Image folders

### `stickers/`
One image per sticker. **The file name is the sticker's ID**, all uppercase in the form
`XXX-YYY-ZZZ` (e.g. `SD-A1B-7Z9.svg`). The same ID is displayed on `designs.html`, so the
image name and the shown ID always match. To add a sticker: drop the image in `stickers/`
named with its ID and add a matching card in `designs.html`. See `stickers/README.md`.

### `past-work/`
Photos of completed jobs. Prefix file names with the date (`YYYY-MM-DD-...`) so the Past Work
page can show the **newest first**. No IDs or captions are shown. See `past-work/README.md`.

## Contact

The contact details in the HTML are placeholders — update the email, phone number, and
Instagram handle in `index.html` (and the footers) with your real details.
