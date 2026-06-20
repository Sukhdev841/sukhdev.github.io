# Stickers folder

Each file in this folder is **one car sticker design** that customers can order.

## Naming rule — the file name **is** the ID

The file name (without extension) is the sticker's **ID**, in this human-readable form:

```
<name>-<category>-<XXX-YYY>.svg
```

- `<name>` — a short, lowercase, hyphenated design name, e.g. `blazing-flames`.
- `<category>` — the design category, e.g. `fire`, `tribal`, `racing`, `gothic`, `wildlife`, `abstract`.
- `<XXX-YYY>` — a short unique code (two groups of 3 characters) that keeps every ID unique.

Example: `blazing-flames-fire-A1B-7Z9.svg` → ID `blazing-flames-fire-A1B-7Z9`.

- The ID is **static and constant** — once assigned, never rename it.
- The same ID is shown on the Designs page, so the **image name and the displayed ID always match**.
- Because the name and category are part of the ID, customers can **search** for stickers by
  name, category or ID on the Designs page.

## Adding a new sticker

1. Drop the image in this folder, named with its ID, e.g. `roaring-dragon-tribal-N5P-2Q8.svg`.
2. Add one matching card in `designs.html` (copy an existing card). Update the `src`, the
   `<h3>` name, the `<span class="tag">` category, the visible ID, the `data-id` on the
   button, and the `data-name` / `data-category` / `data-id` attributes on the
   `.design-card` (these power the search box).

The sample `.svg` files here are placeholders — replace them with your real sticker photos.
