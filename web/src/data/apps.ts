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
  /** itch.io download page; shown instead of the Play CTA when there is no Play listing */
  itchUrl?: string
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
    slug: 'pest-control-customer-manager',
    name: 'Pest Control Customer Manager',
    tagline: 'Recurring customers, service zones, and visit history for Windows.',
    description:
      'Keep your recurring customer database in one place — details, service zones, visit frequency, and service history — so you can batch nearby jobs into a single day and stay on schedule. A local Windows 10/11 app: your data stays on your PC, no account or cloud required. The free demo is limited to 50 customers with no time limit.',
    features: [
      'Customer records with search, call logs, and a leads engine',
      'Service zones that group due work so you finish an area in one pass',
      'Service frequency tracking and a service history log',
      'Invoice and payment tracking',
      'Financial snapshot with projected annual service revenue',
    ],
    playStoreUrl: null,
    itchUrl: 'https://meanderpaul.itch.io/pest-control-customer-manager',
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
