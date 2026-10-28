export type Category = 'game' | 'app' | 'tool'

export type AppInfo = {
  slug: string
  /** Which homepage section the listing appears in */
  category: Category
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
    category: 'game',
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
    category: 'game',
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
    category: 'game',
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
    category: 'game',
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
    category: 'app',
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
    category: 'app',
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
    slug: 'business-all-in-one',
    category: 'tool',
    name: 'Business All-in-One',
    tagline: 'CRM, sales, crew, payroll, and inventory in one Windows program.',
    description:
      'The whole Zanz Business Suite in a single desktop app: customers and service, a sales pipeline, employees and payroll, inventory, and reports, all behind one dashboard. It works offline, keeps everything in a local database on your PC, and adapts its labels and lists to your trade with industry packs for pest control, plumbing, and general service work. Commissions from completed jobs flow straight into payroll, and stock is deducted automatically when a visit is logged.',
    features: [
      'Dashboard, CRM, Sales, Workforce, Inventory, and Reports in one window',
      'Industry packs for pest control, plumbing, and general service',
      'Job commissions pushed directly into payroll',
      'Service visits deduct the materials they use from stock',
      'Phone Access: techs scan a QR code to use inventory from their phone on your Wi-Fi',
      'Sales pipeline that syncs between desks on your local network',
    ],
    playStoreUrl: null,
    status: 'In development',
    accent: '#a0442c',
    initials: 'BA',
  },
  {
    slug: 'pest-control-customer-manager',
    category: 'tool',
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
    slug: 'customer-manager',
    category: 'tool',
    name: 'Customer Manager',
    tagline: 'The Customer Manager for any service trade, set up by industry pack.',
    description:
      'The same customer, service, and accounting tools as Pest Control Customer Manager, built so one app can fit different trades. Pick an industry pack (pest control, plumbing, or general service) and the app loads matching service types, job types, labels, and starter data. Pending follow-ups from the call log are flagged on the customer list and dashboard so nothing slips. A local Windows app; your data stays on your PC.',
    features: [
      'Industry packs for pest control, plumbing, and general service',
      'Customers, service zones, recurring visits, and service history',
      'Accounting, invoices, and a project tracker with commissions',
      'Follow-up alerts from the call log',
      'Excel import and export',
    ],
    playStoreUrl: null,
    status: 'In development',
    accent: '#7a6a1f',
    initials: 'CM',
  },
  {
    slug: 'workforce-hub',
    category: 'tool',
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
    category: 'tool',
    name: 'Inventory Manager',
    tagline: 'Shop stock, truck loads, and purchase orders for Windows.',
    description:
      'Desktop inventory for pest control and field-service businesses: chemicals, bait, traps, tools, and supplies in the shop, on service vehicles, and in the field. Track stock with reorder levels, load and unload trucks, run purchase orders, and see monthly usage to plan reorders. Field techs on the same Wi-Fi can scan a QR code and use stock from their phone with no app to install. Runs on its own, or beside Pest Control Customer Manager to deduct materials automatically when a visit is logged. No cloud account or subscription.',
    features: [
      'Shop stock with SKUs, unit costs, reorder levels, and valuation',
      'Vehicle loads: assign, return, and use stock on the job',
      'Purchase orders with partial and full receiving',
      'Monthly usage and purchase charts for planning',
      'Full movement history and CSV export',
      'Optional phone access on your local Wi-Fi',
    ],
    playStoreUrl: null,
    accent: '#2c6e7a',
    initials: 'IM',
  },
  {
    slug: 'lanledger',
    category: 'tool',
    name: 'LanLedger',
    tagline: 'A sales pipeline that syncs between desks with no server.',
    description:
      'A peer-to-peer CRM for an in-house sales floor. Each desk keeps its own copy in a local database and syncs leads and deals with the other desks on your network, so there is no central server to run. Log a walk-in lead before there is a product, move it through qualified, proposal, and negotiation, then mark it won or lost. Opens in its own window with no browser address bar.',
    features: [
      'Lead-to-close pipeline: qualified, proposal, negotiation, won or lost',
      'Desks sync directly with each other on the local network',
      'Add and name desks like Showroom or Receiving',
      'Works with no internet and no hosted server',
    ],
    playStoreUrl: null,
    status: 'In development',
    accent: '#4a5a6e',
    initials: 'LL',
  },
]

export const categories: { id: Category; title: string; lead: string }[] = [
  {
    id: 'game',
    title: 'Games',
    lead: 'Play in the browser on PlayDrop, on your phone or computer. No install needed.',
  },
  {
    id: 'app',
    title: 'Apps',
    lead: 'Android apps for getting outside: scoring on the archery range and logging hikes and summits.',
  },
  {
    id: 'tool',
    title: 'Tools',
    lead: 'The Zanz Business Suite: Windows software for running a small service business, as separate programs or all in one. Customers and service zones, sales, your crew and payroll, and stock on hand.',
  },
]

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((app) => app.slug === slug)
}
