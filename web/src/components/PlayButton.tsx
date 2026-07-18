type Props = {
  url: string | null
}

/** Play Store CTA — shows Coming soon until a listing URL is set. */
export function PlayButton({ url }: Props) {
  if (url) {
    return (
      <a className="btn btn-play" href={url} target="_blank" rel="noreferrer">
        Get it on Google Play
      </a>
    )
  }

  return (
    <span className="btn btn-play btn-soon" aria-disabled="true">
      Coming soon on Google Play
    </span>
  )
}
