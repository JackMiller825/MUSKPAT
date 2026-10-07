import { stickers } from "../config/assets"

export function StickerGallery() {
  const rail = [...stickers, ...stickers]

  return (
    <>
      <div className="sticker-rail" aria-hidden="true">
        <div className="sticker-rail-track">
          {rail.map((sticker, index) => (
            <img key={`${sticker.label}-${index}`} src={sticker.src} alt="" width={160} height={96} />
          ))}
        </div>
      </div>
      <div className="sticker-grid">
        {stickers.map((sticker) => (
          <figure key={sticker.src} className="panel sticker" data-cursor="true">
            <img src={sticker.src} alt={`TERAFAB sticker, ${sticker.label}`} width={256} height={180} loading="lazy" />
            <figcaption>{sticker.label}</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
