type CommunityCardProps = {
  src: string
  alt: string
  title: string
  caption: string
}

export function CommunityCard({ src, alt, title, caption }: CommunityCardProps) {
  return (
    <article className="panel community-frame">
      <img src={src} alt={alt} width={1200} height={900} loading="lazy" />
      <h2>{title}</h2>
      <p className="frame-caption">{caption}</p>
    </article>
  )
}
