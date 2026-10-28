# Firebirds - Cocktail & More

Vite + React site for the two Firebirds rooms in Da Nang, following the Unify Firebirds Cocktail Brands layout.

- `/` cinematic home: One spirit. *Two ways home.*
- `/stories/tropical-origin` : The Old Soul, Sơn Trà
- `/stories/vietnam-craft` : The New Road, Đà Nẵng
- `/cocktailmenu` full craft list
- `/about-me-1` founders
- `/collection` vibe gallery
- `/book-online` reservations

Language badge: EN / VN, plus JA and KO.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check:emdash
```

## Deploy to firebirdscocktail.com

The app is a Vite SPA. Deep links stay on the client.

- Vercel: `vercel.json` rewrites every path to `/index.html`
- Cloudflare Pages / Netlify: `public/_redirects` uses `/* /index.html 200`
- GitHub Pages: `.github/workflows/deploy.yml` builds `dist` and uploads it, including `dist/404.html` copied from `dist/index.html` so `/cocktailmenu` and `/stories/*` do not 404
- Custom domain file: `public/CNAME` is `firebirdscocktail.com`

