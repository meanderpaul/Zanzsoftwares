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
  /** PlayDrop page where the game plays in the browser */
  playdropUrl?: string
  /** Short status label, e.g. "Early access" */
  status?: string
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
    slug: 'side-hustle-empire',
    name: 'Side Hustle Empire',
    tagline: 'Idle tycoon: tap, hire, go public.',
    description:
      'Tap Pitch to earn cash, buy side hustles from a Freelance Gig up to a Unicorn that keep earning while you are away, and take your company public to restart with shares that boost all income. Ride out market crashes, go viral for double income, and claim a daily streak bonus. Plays in the browser on phone or desktop; progress saves on your device.',
    features: [
      'Eight hustles, each doubling output every 25 owned',
      'IPO prestige with permanent income shares',
      'Offline earnings for up to 4 hours',
      'Random market crashes and daily streak bonuses',
    ],
    playStoreUrl: null,
    playdropUrl: 'https://www.playdrop.ai/@zanz/side-hustle-empire',
    accent: '#c9932a',
    initials: 'SH',
  },
  {
    slug: 'classics-arcade',
    name: 'Classics Arcade',
    tagline: 'Retro arcade games in one pocket-sized cabinet.',
    description:
      'Re-imagined retro classics. Shrinking Arena Snake is playable now in the browser: steer by swiping while the walls close in, with three lives per run. More arcade games are in development, along with an Android release. Progress and high scores stay on your device.',
    features: [
      'Shrinking Arena Snake, playable now',
      'Swipe controls built for phones',
      'Local high scores and personal best',
      'More classic-style games in development',
    ],
    playStoreUrl: null,
    playdropUrl: 'https://www.playdrop.ai/@zanz/classics-arcade',
    accent: '#b3541e',
    initials: 'CA',
  },
  {
    slug: 'color-flow',
    name: 'Color Flow',
    tagline: 'Fire colored shooters to clear the board.',
    description:
      'Tap to fire colored shooters and clear matching blocks from a full board. A quick puzzle game that plays in the browser on phone or desktop.',
    features: ['Tap-to-fire color matching', 'Quick sessions', 'Plays in any modern browser'],
    playStoreUrl: null,
    playdropUrl: 'https://www.playdrop.ai/@zanz/color-flow',
    accent: '#2f7fc1',
    initials: 'CF',
  },
  {
    slug: 'barcode-monsters',
    name: 'Barcode Monsters',
    tagline: 'Tune daily signals to crack gateway codes.',
    description:
      'An early build of a monster-collecting game. Today you lock five daily signals by tuning frequency and phase, and each lock reveals a gateway code. Barcode scanning, monsters and battles are still in development.',
    features: [
      'Five new signals every day',
      'Frequency and phase tuning puzzle',
      'Cloud save',
    ],
    playStoreUrl: null,
    playdropUrl: 'https://www.playdrop.ai/@zanz/barcode-monsters',
    status: 'Early access',
    accent: '#1b8fa6',
    initials: 'BM',
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
    slug: 'workforce-hub',
    name: 'WorkForce Hub',
    tagline: 'Employees, time clock, time off, and payroll for Windows.',
    description:
      'A desktop hub for running a small crew — employees, punches, time off, and pay-period totals. A local Windows 10/11 app with no cloud login and no monthly fee. Runs on its own, or alongside Pest Control Customer Manager to share the roster and pull commission lines into payroll. The free demo is limited to 4 employees and 20 time punches per person.',
    features: [
      'Employee roster with roles, rates, PTO, documents, and notes',
      'Time clock with manual punches and pay-period cards',
      'Time off requests, approvals, and accruals',
      'Payroll with regular, overtime, and commission lines',
      'Optional roster and commission sync with Customer Manager',
    ],
    playStoreUrl: null,
    itchUrl: 'https://meanderpaul.itch.io/workforce-hub',
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
