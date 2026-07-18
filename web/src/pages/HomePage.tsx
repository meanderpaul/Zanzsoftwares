import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import { PlayButton } from '../components/PlayButton'

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Indie Android studio</p>
        <h1 className="hero-brand">Zanz Softwares</h1>
        <p className="hero-lead">
          Small apps built for real use — arcade sessions at home, scorekeeping
          on the range, and whatever comes next.
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
        <ul className="app-list">
          {apps.map((app) => (
            <li key={app.slug} className="app-row">
              <div className="app-copy">
                <h3>
                  <Link to={`/apps/${app.slug}`}>{app.name}</Link>
                </h3>
                <p>{app.tagline}</p>
                <div className="app-links">
                  <Link to={`/apps/${app.slug}`}>Details</Link>
                  <Link to={`/privacy/${app.slug}`}>Privacy policy</Link>
                </div>
              </div>
              <PlayButton url={app.playStoreUrl} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
