export type AppInfo = {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  /** Google Play listing URL, or null while unpublished */
  playStoreUrl: string | null
  /** When true and there is no public listing yet, the CTA reads "In closed testing" */
  closedTesting?: boolean
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
    closedTesting: true,
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
  {
    slug: 'pest-control-crm',
    name: 'Pest Control CRM',
    tagline: 'Customers, jobs, and service visits for pest control crews.',
    description:
      'Keep customer records, schedule recurring treatments, and log every service visit so technicians and the office stay on the same page.',
    features: [
      'Customer and property records',
      'Job scheduling and recurring service plans',
      'Service visit notes and history',
    ],
    playStoreUrl: null,
    accent: '#8a5a1f',
    initials: 'PC',
  },
  {
    slug: 'workforce-employee-manager',
    name: 'Workforce Employee Manager',
    tagline: 'Staff, schedules, and hours in one place.',
    description:
      'Manage your team roster, build shift schedules, and track hours so small businesses can run their workforce without spreadsheets.',
    features: [
      'Employee roster and contact details',
      'Shift scheduling',
      'Hours and attendance tracking',
    ],
    playStoreUrl: null,
    accent: '#6b3f7a',
    initials: 'WM',
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    tagline: 'Know what you have, where it is, and when to reorder.',
    description:
      'Track stock levels across items and locations, record what comes in and goes out, and spot low inventory before it becomes a problem.',
    features: [
      'Item catalog with stock levels',
      'Stock in / stock out logging',
      'Low-stock alerts',
    ],
    playStoreUrl: null,
    accent: '#2c6e7a',
    initials: 'IM',
  },
]

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((app) => app.slug === slug)
}
