export type AppInfo = {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  /** Google Play listing URL, or null while unpublished */
  playStoreUrl: string | null
  privacyPath: string
}

export const apps: AppInfo[] = [
  {
    slug: 'classics-arcade',
    name: 'Classics Arcade',
    tagline: 'Retro arcade games in one pocket-sized cabinet.',
    description:
      'A collection of classic arcade-style games for quick sessions on Android. Progress and high scores stay on your device.',
    features: [
      'Multiple classic-style mini-games',
      'Local high scores and progress',
      'Optional ads with a clean play-first layout',
    ],
    playStoreUrl: null,
    privacyPath: 'privacy/classics-arcade.md',
  },
  {
    slug: 'archerypal',
    name: 'Archerypal',
    tagline: 'Peer-to-peer archery scoring on the field.',
    description:
      'Host or join a shoot, log scores with a large outdoor-readable pad, and watch the leaderboard update as the host syncs everyone — online via relay when you have data, Nearby Connections when you do not.',
    features: [
      'Host / join with QR codes',
      'Turn-based scoring pad (0–10)',
      'Live leaderboard synced from the host',
      'Works offline with local peer connections',
    ],
    playStoreUrl: null,
    privacyPath: 'privacy/archerypal.md',
  },
]

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((app) => app.slug === slug)
}
