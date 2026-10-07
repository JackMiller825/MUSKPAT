import { assets } from "../config/assets"
import { FactoryCore } from "../components/FactoryCore"
import { Reveal } from "../components/Reveal"
import { usePageMeta } from "../hooks/usePageMeta"

const stages = [
  {
    id: "01",
    title: "RAW COMPUTE",
    copy: "Energy, hardware and infrastructure form the foundation.",
    src: assets.factoryBackground,
    alt: "The TERAFAB factory city and its compute yards",
    contain: false,
  },
  {
    id: "02",
    title: "CHIP FABRICATION",
    copy: "Silicon becomes the computational substrate of intelligence.",
    src: assets.siChip,
    alt: "SI fabrication chip with a blue core",
    contain: true,
  },
  {
    id: "03",
    title: "AGENT ASSEMBLY",
    copy: "Models become autonomous systems capable of acting in the world.",
    src: assets.heroCharacter,
    alt: "TERAFAB assembly android",
    contain: true,
  },
  {
    id: "04",
    title: "SUPER INTELLIGENCE",
    copy: "Compute, agents and intelligence converge into something larger.",
    src: assets.factoryCore,
    alt: "The reactor at the center of the factory",
    contain: false,
  },
]

export function Factory() {
  usePageMeta("Factory | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">PROCESS</p>
          <h1>
            FROM SILICON
            <br />
            TO SUPER INTELLIGENCE
          </h1>
          <p className="lede">Four stages. One line. The factory does not skip steps.</p>
        </div>
      </header>
      <div className="wrap">
        {stages.map((stage, index) => (
          <Reveal key={stage.id}>
            <article className={index % 2 === 1 ? "panel stage stage-flip" : "panel stage"}>
            <div className="stage-visual">
              <img
                className={stage.contain ? "contain" : undefined}
                src={stage.src}
                alt={stage.alt}
                width={960}
                height={640}
                loading="lazy"
              />
            </div>
            <div className="stage-copy">
              <p className="index">STAGE {stage.id}</p>
              <h2>{stage.title}</h2>
              <p>{stage.copy}</p>
            </div>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <FactoryCore />
        </Reveal>
      </div>
    </article>
  )
}
