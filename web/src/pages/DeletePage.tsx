import { Link, useParams } from 'react-router-dom'
import { getApp } from '../data/apps'

const SUPPORT_EMAIL = 'zanzsoftwares@gmail.com'

const deleteCopy: Record<
  string,
  {
    intro: string
    steps: string[]
    notes: string[]
  }
> = {
  'strato-altus': {
    intro:
      'You can delete your Strato Altus account and associated server data from inside the app. Uninstalling alone does not delete your account.',
    steps: [
      'Open Strato Altus and sign in.',
      'Go to Settings → Account Management → Delete account.',
      'Confirm with your password.',
    ],
    notes: [
      'Deletion is permanent.',
      'We remove your account record, hike logs, uploaded photos tied to your account (where technically possible), and password-reset tokens.',
      'If you cannot access the app, email us with the subject “Strato Altus account deletion” and the email or username on the account.',
    ],
  },
}

export function DeletePage() {
  const { slug = '' } = useParams()
  const app = getApp(slug)
  const copy = deleteCopy[slug]

  if (!app || !app.hasAccountDeletion || !copy) {
    return (
      <main className="page">
        <p>Deletion instructions not found.</p>
        <Link to="/">Back home</Link>
      </main>
    )
  }

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `${app.name} account deletion`,
  )}`

  return (
    <main className="page delete-page">
      <p className="crumb">
        <Link to="/">Home</Link> / <Link to={`/apps/${app.slug}`}>{app.name}</Link>{' '}
        / Delete account
      </p>
      <h1>Account & data deletion</h1>
      <p className="tagline">{app.name}</p>
      <p>{copy.intro}</p>

      <h2>Delete in the app</h2>
      <ol className="delete-steps">
        {copy.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>What is removed</h2>
      <ul className="feature-list">
        {copy.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <h2>Request by email</h2>
      <p>
        Prefer email, or cannot reach Settings? Contact{' '}
        <a href={mailto}>{SUPPORT_EMAIL}</a>.
      </p>

      <div className="page-actions">
        <a className="btn btn-primary" href={mailto}>
          Email deletion request
        </a>
        <Link className="btn btn-ghost" to={`/privacy/${app.slug}`}>
          Privacy policy
        </Link>
      </div>
    </main>
  )
}
