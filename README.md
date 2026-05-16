# Precision Cutz Preview Site

Static Vite website for Precision Cutz, a beauty salon / barber shop at 34624 Alvarado-Niles Rd in Union City, CA.

## Local Commands

```bash
npm install
npm run build
```

`npm run build` writes the production build to `dist/`.

## Deploy Notes

The project is ready for Vercel as a static Vite site.

Recommended production settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

If authenticated locally:

```bash
gh repo create site-precision-cutz --public --source=. --remote=origin --push
vercel --prod --yes
```

Do not commit generated folders such as `node_modules/`, `dist/`, or `.vercel/`.
