import type { ReactNode } from 'react'

type Props = {
  url: string | null
  closedTesting?: boolean
  itchUrl?: string
  playdropUrl?: string
}

/**
 * Store CTAs. A PlayDrop link ("Play in browser") comes first when present.
 * Then Google Play when listed, else itch.io if available. "Coming soon" /
 * "Closed testing" only shows when there is no other way to get the app yet,
 * or when the app is in closed testing.
 */
export function PlayButton({ url, closedTesting, itchUrl, playdropUrl }: Props) {
  const playdrop = playdropUrl ? (
    <a className="btn btn-play" href={playdropUrl} target="_blank" rel="noreferrer">
      Play in browser
    </a>
  ) : null

  let store: ReactNode = null
  if (url) {
    store = (
      <a className={playdrop ? 'btn btn-ghost' : 'btn btn-play'} href={url} target="_blank" rel="noreferrer">
        Get it on Google Play
      </a>
    )
  } else if (itchUrl) {
    store = (
      <a className={playdrop ? 'btn btn-ghost' : 'btn btn-play'} href={itchUrl} target="_blank" rel="noreferrer">
        Download on itch.io
      </a>
    )
  } else if (closedTesting || !playdrop) {
    store = (
      <span className="btn btn-play btn-soon" aria-disabled="true">
        {closedTesting ? 'In closed testing on Google Play' : 'Coming soon on Google Play'}
      </span>
    )
  }

  if (playdrop && store) {
    return (
      <span className="cta-group">
        {playdrop}
        {store}
      </span>
    )
  }
  return playdrop ?? store
}
