import { assets } from "../config/assets"

const stations = ["SILICON", "CHIPS", "COMPUTE", "MODELS", "AGENTS", "SUPER INTELLIGENCE"]
const chips = [0, 1, 2, 3, 4, 5]

export function Conveyor() {
  const loop = [...stations, ...stations]

  return (
    <section className="section" id="conveyor" aria-labelledby="conveyor-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">LINE 01</p>
          <h2 id="conveyor-title">THE FACTORY IS ONLINE</h2>
          <p>Raw compute goes in. Super Intelligence comes out.</p>
        </div>
        <div className="line-scene">
          <div className="arm arm-left">
            <img src={assets.robotArm} alt="Robotic assembly arm" width={360} height={338} />
          </div>
          <div className="arm arm-right" aria-hidden="true">
            <img src={assets.robotArm} alt="" width={360} height={338} />
          </div>
          <img className="mobile-chip" src={assets.siChip} alt="" width={120} height={120} />
          <div className="rail">
            <div className="rail-track">
              {loop.map((label, index) => (
                <article className="station" key={`${label}-${index}`} aria-hidden={index >= stations.length}>
                  <span>0{(index % stations.length) + 1}</span>
                  <strong>{label}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="chip-lane" aria-hidden="true">
            <div className="chip-track">
              {[...chips, ...chips].map((chip, index) => (
                <img
                  key={`${chip}-${index}`}
                  className="chip-token"
                  src={assets.siChip}
                  alt=""
                  width={92}
                  height={92}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
