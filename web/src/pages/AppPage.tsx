import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getApp } from '../data/apps'
import { hasPrivacyPolicy } from '../data/privacy'
import { PlayButton } from '../components/PlayButton'

export function AppPage() {
  const { slug = '' } = useParams()
  const app = getApp(slug)

  if (!app) {
    return (
      <main className="page">
        <p>App not found.</p>
        <Link to="/">Back home</Link>
      </main>
    )
  }

  return (
    <main
      className="page app-detail"
      style={{ '--card-accent': app.accent } as CSSProperties}
    >
      <p className="crumb">
        <Link to="/">Home</Link> / {app.name}
      </p>
      <div className="detail-banner">
        <span className="card-initials">{app.initials}</span>
      </div>
      <h1>{app.name}</h1>
      <p className="tagline">{app.tagline}</p>
      <p>{app.description}</p>
      <ul className="feature-list">
        {app.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="page-actions">
        <PlayButton
          url={app.playStoreUrl}
          closedTesting={app.closedTesting}
          itchUrl={app.itchUrl}
        />
        {!hasPrivacyPolicy(app) ? null : app.privacyUrl ? (
          <a
            className="btn btn-ghost"
            href={app.privacyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        ) : (
          <Link className="btn btn-ghost" to={`/privacy/${app.slug}`}>
            Privacy policy
          </Link>
        )}
        {app.hasAccountDeletion ? (
          <Link className="btn btn-ghost" to={`/delete/${app.slug}`}>
            Delete account
          </Link>
        ) : null}
      </div>
    </main>
  )
}
