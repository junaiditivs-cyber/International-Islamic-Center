# International Islamic Center (optimized website)

This is the optimized source of the existing business website. The design, pages,
menus, forms and existing integrations are retained. Presentation uses HTML/CSS
in React JSX; React is kept for routing and interactive forms so they continue
to behave the same way.

## Get started

1. Install **Node.js 20 or newer**.
2. Open a terminal in this directory (`islamic center`).
3. Run:

   ```bash
   npm ci
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Test the optimized *production* site

```bash
npm run lint
npm run build
npm run preview
```

Compare Lighthouse on the **production preview** rather than on the Vite
`npm run dev` server. Production bundles are minified and code-split.

## Deploy

Upload the project to your hosting provider (Vercel settings are included).
Run `npm run build` with output directory `dist`.

## Registration and contacts

`/enroll` retains the existing FormSubmit and n8n test-webhook integrations,
including all previous fields and UTM information. Make sure these endpoints
are correctly configured and test an actual email/webhook delivery before
launching. `/trial` and `/contact` were only showing an on-screen success
message in the uploaded code (no network submission). That behavior is
unchanged. To receive these submissions, a server endpoint still needs to be
connected. Browser reviews are still stored only in localStorage.

Read `OPTIMIZATION_NOTES.md` for a full explanation of the changes.
