import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { apps, categories, type AppInfo, type Category } from '../data/apps'
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

const sectionId = (id: Category) => `${id}s`

function jumpTo(id: Category) {
  document.getElementById(sectionId(id))?.scrollIntoView({ behavior: 'smooth' })
}

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Indie games, apps &amp; tools</p>
        <h1 className="hero-brand">Zanz Softwares</h1>
        <p className="hero-lead">
          Browser games you can play right now, apps for scoring on the range
          and logging peaks on the trail, and tools for running a small
          service business.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => jumpTo('game')}>
            Play our games
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => jumpTo('app')}>
            Apps
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => jumpTo('tool')}>
            Tools
          </button>
        </div>
        <div className="hero-wash" aria-hidden="true" />
      </section>

      {categories.map((cat) => {
        const items = apps.filter((app) => app.category === cat.id)
        if (items.length === 0) return null
        return (
          <section key={cat.id} id={sectionId(cat.id)} className="apps">
            <h2>{cat.title}</h2>
            <p className="section-lead">
              {cat.lead}
              {cat.id === 'game' ? (
                <>
                  {' '}
                  <a href="https://www.playdrop.ai/@zanz" target="_blank" rel="noreferrer">
                    See all our games on PlayDrop
                  </a>
                  .
                </>
              ) : null}
            </p>
            <ul className="card-grid">
              {items.map((app) => (
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
        )
      })}
    </main>
  )
}
