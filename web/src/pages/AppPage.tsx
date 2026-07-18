import { Link, useParams } from 'react-router-dom'
import { getApp } from '../data/apps'
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
    <main className="page">
      <p className="crumb">
        <Link to="/">Home</Link> / {app.name}
      </p>
      <h1>{app.name}</h1>
      <p className="tagline">{app.tagline}</p>
      <p>{app.description}</p>
      <ul className="feature-list">
        {app.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="page-actions">
        <PlayButton url={app.playStoreUrl} />
        <Link className="btn btn-ghost" to={`/privacy/${app.slug}`}>
          Privacy policy
        </Link>
      </div>
    </main>
  )
}
