# The Sicilian Outbound Gala 2026

Static HTML + Tailwind CSS conversion of the original Lovable/TanStack project.

## Run

Install dependencies once, then build the production files:

```powershell
npm install
npm run build
```

Serve the production build locally:

```powershell
npm start
```

Then open:

```text
http://127.0.0.1:4173/
```

## Files

- `index.html` - page markup with Tailwind utility classes
- `src/input.css` - Tailwind source file
- `tailwind.css` - generated Tailwind CSS bundle
- `styles.css` - custom theme utilities, gradients, and animations
- `app.js` - countdown, FAQ search, popup, icons, and reveal animation
- `assets/` - bundled local image assets from the source zip
- `dist/` - generated production folder for server upload
- `DEPLOYMENT.md` - Git and server hosting instructions

Note: the source archive referenced several Lovable-hosted `/__l5e/assets-v1/...` image URLs that were not included as real files in the zip. This static conversion uses the bundled local images and HTML logo treatments so it works outside Lovable.
