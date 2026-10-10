type Props = {
  url: string | null
  closedTesting?: boolean
}

/** Play Store CTA — shows Coming soon (or Closed testing) until a listing URL is set. */
export function PlayButton({ url, closedTesting }: Props) {
  if (url) {
    return (
      <a className="btn btn-play" href={url} target="_blank" rel="noreferrer">
        Get it on Google Play
      </a>
    )
  }

  return (
    <span className="btn btn-play btn-soon" aria-disabled="true">
      {closedTesting ? 'In closed testing on Google Play' : 'Coming soon on Google Play'}
    </span>
  )
}
