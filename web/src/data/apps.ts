export type AppInfo = {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  /** Google Play listing URL, or null while unpublished */
  playStoreUrl: string | null
  /** External privacy policy URL; when omitted the site renders privacy/<slug>.md */
  privacyUrl?: string
  /** When true, the catalog links to /#/delete/<slug> for account deletion */
  hasAccountDeletion?: boolean
  /** Accent color used for the card and detail page */
  accent: string
  /** Short label shown on the card art block */
  initials: string
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
    accent: '#b3541e',
    initials: 'CA',
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
    accent: '#2f6b4f',
    initials: 'AP',
  },
  {
    slug: 'strato-altus',
    name: 'Strato Altus',
    tagline: 'Hiking and peak challenges with your community.',
    description:
      'Log hikes and summits, verify them with photos, and climb leaderboards through peak challenges. Track your progress, earn badges, and share contest photos with other hikers.',
    features: [
      'Peak and hike logging with verification',
      'Challenges, badges, and leaderboards',
      'Photo contests and community stats',
      'No ads, no third-party analytics',
    ],
    playStoreUrl: null,
    hasAccountDeletion: true,
    accent: '#3b5b92',
    initials: 'SA',
  },
]

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((app) => app.slug === slug)
}
