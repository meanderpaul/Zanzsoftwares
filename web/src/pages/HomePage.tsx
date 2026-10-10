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
        <p className="eyebrow">Indie Android studio</p>
        <h1 className="hero-brand">Zanz Softwares</h1>
        <p className="hero-lead">
          Small apps built for real use — arcade sessions at home, scorekeeping
          on the range, peak challenges on the trail, and whatever comes next.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See our apps
          </button>
        </div>
        <div className="hero-wash" aria-hidden="true" />
      </section>

      <section id="apps" className="apps">
        <h2>Apps</h2>
        <p className="section-lead">
          Each listing has a short overview, privacy policy, and Play Store link
          when available.
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
                </h3>
                <p>{app.tagline}</p>
                <div className="card-links">
                  <Link to={`/apps/${app.slug}`}>Details</Link>
                  {privacyLink(app)}
                  {deleteLink(app)}
                </div>
                <PlayButton url={app.playStoreUrl} closedTesting={app.closedTesting} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
