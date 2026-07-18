# Zanz Softwares

Public site and privacy policies for apps published by Zanz Softwares.

**Support:** zanzsoftwares@gmail.com

## Website

Small React site in [`web/`](web/) — app catalog, detail pages, privacy pages, and Google Play CTAs (Coming soon until a listing URL is set).

```bash
cd web
npm install
npm run dev
```

Production build (GitHub Pages base path `/Zanzsoftwares/`):

```bash
cd web
npm run build
```

### Add another app

1. Copy `privacy/_template.md` → `privacy/your-app-slug.md` and fill it in.
2. Add an entry in `web/src/data/apps.ts`.
3. Import the markdown in `web/src/pages/PrivacyPage.tsx` and map it in `privacyBySlug`.
4. Commit and push.

### Play Store links

In `web/src/data/apps.ts`, set `playStoreUrl` from `null` to your listing URL when ready. The button switches from “Coming soon” to “Get it on Google Play”.

## Privacy policies (markdown)

| App | Markdown | Site route (after Pages deploy) |
|-----|----------|----------------------------------|
| Classics Arcade | [privacy/classics-arcade.md](privacy/classics-arcade.md) | `/#/privacy/classics-arcade` |
| Archerypal | [privacy/archerypal.md](privacy/archerypal.md) | `/#/privacy/archerypal` |

GitHub blob URLs still work for Play Console if you prefer:

- https://github.com/meanderpaul/Zanzsoftwares/blob/main/privacy/classics-arcade.md
- https://github.com/meanderpaul/Zanzsoftwares/blob/main/privacy/archerypal.md
