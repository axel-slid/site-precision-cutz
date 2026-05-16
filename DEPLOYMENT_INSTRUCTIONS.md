# Deployment Instructions

GitHub authentication is available in this workspace, so the repository can be pushed automatically.

Vercel CLI is not installed on PATH, and this automated run should not use `npx vercel` because it can install or prompt interactively.

## Manual Vercel Deploy

From this project folder:

```bash
npm install
npm run build
npm install -g vercel
vercel login
vercel --prod
```

Suggested Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

After deployment, add the production URL to `LEAD_BRIEF.md`.
