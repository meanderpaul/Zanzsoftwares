import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { apps, type AppInfo } from '../data/apps'
import { hasPrivacyPolicy } from '../data/privacy'
import { PlayButton } from '../components/PlayButton'

function privacyLink(app: AppInfo) {
  if (!hasPrivacyPolicy(app)) return null
  if (app.privacyUrl) {
    return (
      <a href={app.privacyUrl} target="_blank" rel="noreferrer">
        Privacy policy
      </a>
    )
  }
  return <Link to={`/privacy/${app.slug}`}>Privacy policy</Link>
}

function deleteLink(app: AppInfo) {
  if (!app.hasAccountDeletion) return null
  return <Link to={`/delete/${app.slug}`}>Delete account</Link>
}

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Indie games &amp; apps for web, Android and Windows</p>
        <h1 className="hero-brand">Zanz Softwares</h1>
        <p className="hero-lead">
          Small games and apps built for real use: browser games you can play
          right now, scorekeeping on the range, peak challenges on the trail,
          and desktop tools for running a small service business.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See our games &amp; apps
          </button>
          <a
            className="btn btn-ghost"
            href="https://www.playdrop.ai/@zanz"
            target="_blank"
            rel="noreferrer"
          >
            Our games on PlayDrop
          </a>
        </div>
        <div className="hero-wash" aria-hidden="true" />
      </section>

      <section id="apps" className="apps">
        <h2>Games &amp; apps</h2>
        <p className="section-lead">
          Each listing has a short overview and a way to get it: play in the
          browser on PlayDrop, or a Google Play or itch.io link when available.
          Privacy policies are linked where an app has one.
        </p>
        <ul className="card-grid">
          {apps.map((app) => (
            <li
              key={app.slug}
              className="app-card"
              style={{ '--card-accent': app.accent } as CSSProperties}
            >
              <Link
                to={`/apps/${app.slug}`}
                className="card-art"
                aria-label={`${app.name} details`}
              >
                <span className="card-initials">{app.initials}</span>
              </Link>
              <div className="card-body">
                <h3>
                  <Link to={`/apps/${app.slug}`}>{app.name}</Link>
                  {app.status ? <span className="status-pill">{app.status}</span> : null}
                </h3>
                <p>{app.tagline}</p>
                <div className="card-links">
                  <Link to={`/apps/${app.slug}`}>Details</Link>
                  {privacyLink(app)}
                  {deleteLink(app)}
                </div>
                <PlayButton
                  url={app.playStoreUrl}
                  closedTesting={app.closedTesting}
                  itchUrl={app.itchUrl}
                  playdropUrl={app.playdropUrl}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
