type Props = {
  url: string | null
  closedTesting?: boolean
  itchUrl?: string
}

/** Store CTA — Google Play when listed, else itch.io if available, else Coming soon / Closed testing. */
export function PlayButton({ url, closedTesting, itchUrl }: Props) {
  if (url) {
    return (
      <a className="btn btn-play" href={url} target="_blank" rel="noreferrer">
        Get it on Google Play
      </a>
    )
  }

  if (itchUrl) {
    return (
      <a className="btn btn-play" href={itchUrl} target="_blank" rel="noreferrer">
        Download on itch.io
      </a>
    )
  }

  return (
    <span className="btn btn-play btn-soon" aria-disabled="true">
      {closedTesting ? 'In closed testing on Google Play' : 'Coming soon on Google Play'}
    </span>
  )
}
