# Indesore Trading Ltd. website

Static site built with Vite and Tailwind CSS v4.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build     # output in dist/
npm run preview   # serve the production build
```

## Deploy

Pushing to `main` builds the site and deploys it to GitHub Pages through
`.github/workflows/deploy.yml`. In the repo settings, set **Pages → Source** to **GitHub Actions**.

Live site: https://emamul-mottakin.github.io/itl-website/

## Structure

- `index.html` – page markup
- `src/main.js` – interactivity (renders department and event details)
- `src/data/` – department and event content
- `src/index.css` – Tailwind import and theme
- `public/` – images and icons
