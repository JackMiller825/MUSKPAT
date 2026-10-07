import { assets } from "../config/assets"
import { CommunityCard } from "../components/CommunityCard"
import { SocialButtons } from "../components/SocialButtons"
import { StickerGallery } from "../components/StickerGallery"
import { usePageMeta } from "../hooks/usePageMeta"

export function Community() {
  usePageMeta("Community | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">BUILDERS</p>
          <h1>JOIN THE FACTORY</h1>
          <p className="lede">THE FACTORY IS NOTHING WITHOUT ITS BUILDERS.</p>
        </div>
      </header>
      <div className="wrap">
        <p className="lede">
          TERAFAB is a global community built around one ridiculous idea: if the world is racing toward Super
          Intelligence, somebody has to build the factory.
        </p>
        <div className="profile-row">
          <img src={assets.xProfile} alt="TERAFAB profile mark for X" width={64} height={64} loading="lazy" />
          <img
            src={assets.telegramProfile}
            alt="TERAFAB profile mark for Telegram"
            width={64}
            height={64}
            loading="lazy"
          />
        </div>
        <SocialButtons />
      </div>
      <section className="section" aria-labelledby="channels-title">
        <div className="wrap">
          <h2 id="channels-title">Channel art</h2>
          <figure className="channel-banner">
            <img
              src={assets.xHeader}
              alt="TERAFAB wordmark prepared for the X header"
              width={1500}
              height={500}
              loading="lazy"
            />
          </figure>
          <div className="community-hero">
            <CommunityCard
              src={assets.communityCard}
              alt="Community artwork inviting people to join the TERAFAB factory"
              title="The floor"
              caption="X, Telegram, and the site. The official doors, when they open."
            />
            <CommunityCard
              src={assets.telegramWelcome}
              alt="Welcome artwork for the TERAFAB Telegram channel"
              title="The welcome"
              caption="The channel opens with the factory, not a placeholder crowd."
            />
            <CommunityCard
              src={assets.xLaunch}
              alt="TERAFAB launch artwork with the factory online"
              title="The launch"
              caption="The X launch frame. The line is lit. The links stay dark until they are real."
            />
            <CommunityCard
              src={assets.xMeme}
              alt="TERAFAB meme artwork of a robot in sunglasses with the line about buying before the factory went global"
              title="The template"
              caption="A timeline joke. The artwork talks. The site does not promise a chart."
            />
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="stickers-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 id="stickers-title">Sticker bay</h2>
          <p className="lede" style={{ margin: "10px 0 18px" }}>
            Floor stickers for the people actually on the line.
          </p>
          <StickerGallery />
        </div>
      </section>
    </article>
  )
}
