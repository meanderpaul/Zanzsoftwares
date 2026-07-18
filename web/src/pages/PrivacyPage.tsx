import { Link, useParams } from 'react-router-dom'
import { getApp } from '../data/apps'
import classicsArcade from '@privacy/classics-arcade.md?raw'
import archerypal from '@privacy/archerypal.md?raw'

const privacyBySlug: Record<string, string> = {
  'classics-arcade': classicsArcade,
  archerypal: archerypal,
}

function renderMarkdownLite(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
    )
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`)
    .replace(/^(?!<[hul]|<li)(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
}

export function PrivacyPage() {
  const { slug = '' } = useParams()
  const app = getApp(slug)
  const markdown = privacyBySlug[slug]

  if (!app || !markdown) {
    return (
      <main className="page">
        <p>Privacy policy not found.</p>
        <Link to="/">Back home</Link>
      </main>
    )
  }

  return (
    <main className="page privacy">
      <p className="crumb">
        <Link to="/">Home</Link> / <Link to={`/apps/${app.slug}`}>{app.name}</Link>{' '}
        / Privacy
      </p>
      <article
        className="policy"
        dangerouslySetInnerHTML={{ __html: renderMarkdownLite(markdown) }}
      />
    </main>
  )
}
