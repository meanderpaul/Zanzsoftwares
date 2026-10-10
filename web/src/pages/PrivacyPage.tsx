import { Link, useParams } from 'react-router-dom'
import { getApp } from '../data/apps'
import { privacyBySlug } from '../data/privacy'

function renderMarkdownLite(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, href: string) => {
      const external = /^https?:\/\//i.test(href)
      const attrs = external ? ' target="_blank" rel="noreferrer"' : ''
      return `<a href="${href}"${attrs}>${label}</a>`
    })
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li data-ordered="1">$1</li>')
    .replace(/(<li(?![^>]*data-ordered).*?<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`)
    .replace(/(<li data-ordered="1">.*?<\/li>\n?)+/g, (block) =>
      `<ol>${block.replace(/ data-ordered="1"/g, '')}</ol>`,
    )
    .replace(/^(?!<[hul]|<li|<ol|<ul)(.+)$/gm, '<p>$1</p>')
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
      {app.hasAccountDeletion ? (
        <div className="page-actions" style={{ marginTop: '1.75rem' }}>
          <Link className="btn btn-ghost" to={`/delete/${app.slug}`}>
            Account & data deletion
          </Link>
        </div>
      ) : null}
    </main>
  )
}
