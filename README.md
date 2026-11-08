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
- `src/main.js` – page interactivity (department tabs and panel, contact form, newsletter)
- `src/strip.js` – the scrolling brand/certificate strips and the Life at Indesore photo reel
- `src/data/` – department, brand, certificate and life-photo content
- `src/index.css` – Tailwind import and theme
- `public/` – images and icons
