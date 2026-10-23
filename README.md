# Zanz Softwares

Public site and privacy policies for apps published by Zanz Softwares.

**Support:** zanzsoftwares@gmail.com

## Website

Small React site in [`web/`](web/) — game and app catalog, detail pages, privacy pages, and store CTAs: "Play in browser" for PlayDrop games, Google Play, or itch.io.

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
2. Add an entry in `web/src/data/apps.ts` with its `category`: `'game'` (Games), `'app'` (Apps) or `'tool'` (Tools). The homepage groups listings into those sections; their headings and intros are in `categories` in the same file.
3. Import the markdown in `web/src/data/privacy.ts` and map it in `privacyBySlug`. Apps without a policy yet simply hide the privacy link.
4. Commit and push.

### Play Store links

In `web/src/data/apps.ts`, set `playStoreUrl` from `null` to your listing URL when ready. The button switches from “Coming soon” to “Get it on Google Play”. Set `closedTesting: true` to show “In closed testing” while the listing is still private.

### PlayDrop links

Browser games live on PlayDrop under [@zanz](https://www.playdrop.ai/@zanz). Set `playdropUrl` in `web/src/data/apps.ts` to the game's page (use the link without `?v=`, which always opens the latest published version). The card then shows a **Play in browser** button, and the Google Play “Coming soon” chip is hidden unless `closedTesting` is set. Use `status` (e.g. `'Early access'`) for a small label next to the name.

| Game | PlayDrop |
|------|----------|
| Side Hustle Empire | https://www.playdrop.ai/@zanz/side-hustle-empire |
| Classics Arcade (Shrinking Arena Snake) | https://www.playdrop.ai/@zanz/classics-arcade |
| Color Flow | https://www.playdrop.ai/@zanz/color-flow |
| Barcode Monsters (early access) | https://www.playdrop.ai/@zanz/barcode-monsters |

## Privacy policies (markdown)

| App | Markdown | Site route (after Pages deploy) |
|-----|----------|----------------------------------|
| Classics Arcade | [privacy/classics-arcade.md](privacy/classics-arcade.md) | `/#/privacy/classics-arcade` |
| Archerypal | [privacy/archerypal.md](privacy/archerypal.md) | `/#/privacy/archerypal` |
| Strato Altus | [privacy/strato-altus.md](privacy/strato-altus.md) | `/#/privacy/strato-altus` |

Account deletion (apps with server accounts):

| App | Site route |
|-----|------------|
| Strato Altus | `/#/delete/strato-altus` |

GitHub blob URLs still work for Play Console if you prefer:

- https://github.com/meanderpaul/Zanzsoftwares/blob/main/privacy/classics-arcade.md
- https://github.com/meanderpaul/Zanzsoftwares/blob/main/privacy/archerypal.md
- https://github.com/meanderpaul/Zanzsoftwares/blob/main/privacy/strato-altus.md
