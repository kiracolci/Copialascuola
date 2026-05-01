import { useEffect, useRef } from "react";
import "./Festa.css";

const schedule = [
  {
    period: "Mattina",
    icon: "☀️",
    items: [
      { time: "Ore 10:30", desc: "Escursione naturalistica (circa 2 ore), per registrarsi scrivere a scuoletta.sanlib@gmail.com" },
    ],
  },
  {
    period: "Pomeriggio",
    icon: "🌤️",
    items: [
      { time: "Ore 15:30", desc: "Apertura iscrizioni ai giochi in piazza" },
      {
        time: "Dalle 16:00",
        desc: "Via delle attività aperte a tutte le età:",
        activities: [
          " 15:30-18:30  Grande caccia al tesoro con premio finale",
          "16:00-19:00  tavoli tematici, giochi e attività per bambini ",
          "Spazio disegno per bambini",
          "Giochi popolari in piazza",
          "Torneo di Bocce",
          "18:00-19:00 Gara di dolci",
          "19:00 premiazioni",
        ],
      },
      {
        time: "",
        desc: "Tavoli tematici Nel pomeriggio sarà possibile consultare i materiali della residenza artistica realizzata lo scorso autunno. Tavoli liberi per giochi e attività di gruppo.",
        italic: true,
      },
    ],
  },
  {
    period: "Sera",
    icon: "🌙",
    items: [
      {
        time: "Ore 19:00",
        desc: "La festa prosegue con racconti e musica intorno al fuoco. Cibo fino alle 22:00",
      },
    ],
  },
];

export default function Festa() {  
    const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add("visible");
    });
  }, []);

  return (
<div className="sl-page festa-page">
        {/* Hero */}
      <div className="sl-hero">
        <div className="sl-hero__overlay" />
        <div ref={heroRef} className="sl-hero__content">
          <p className="sl-hero__by">a cura di La Scuoletta</p>
          <h1 className="sl-hero__title">
            San Liberatore
            <br />
            <em>in festa…</em>
          </h1>
          <p className="sl-hero__date">Sabato 30 maggio 2026</p>
          <p className="sl-hero__place">San Liberatore di Collestatte (TR)</p>
          <div className="sl-hero__tags">
            {["Musica", "Giochi", "Cibo", "E molto altro"].map((t) => (
              <span key={t} className="sl-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Highlight banner */}
      <div className="sl-banner">
        <p className="sl-banner__text">
          🏆 Grande caccia al tesoro —{" "}
          <strong>iscrizioni in piazza aperte dalle 15:30! </strong>
        </p>
        <p className="sl-banner__sub">Dalle ore 16… finché c'è festa</p>
      </div>
{/* Marquee */}
<div className="sl-marquee">
  <div className="sl-marquee__track">
    <span>🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo ·🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo ·🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo · </span>
    <span>🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo ·🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo ·🍦 Gelateria-Yogurteria Andrea & 🧀 Lu Pizzicarolo · </span>
  </div>
</div>
      {/* Programme */}

      <div className="sl-section">
        <div className="sl-section__header">
          <span className="sl-section__eyebrow">30 maggio</span>
          <h2 className="sl-section__title">Programma della giornata</h2>
        </div>

        <div className="sl-schedule">
          {schedule.map((block, bi) => (
            <div key={bi} className="sl-block">
              <div className="sl-block__left">
                <span className="sl-block__icon">{block.icon}</span>
                <div className="sl-block__line" />
              </div>
              <div className="sl-block__right">
                <h3 className="sl-block__title">{block.period}</h3>
                {block.items.map((item, ii) => (
                  <div key={ii} className="sl-item">
                    {item.time && (
                      <span className="sl-item__time">{item.time}</span>
                    )}
                    <p
                      className={`sl-item__desc${item.italic ? " sl-item__desc--italic" : ""}`}
                    >
                      {item.desc}
                    </p>
                    {item.activities && (
                      <ul className="sl-activity-list">
                        {item.activities.map((a) => (
                          <li key={a}>
                            <span className="sl-bullet">◆</span> {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
<div className="sl-map-section">
  <div className="sl-section__header" style={{maxWidth: 720, margin: '0 auto', padding: '64px 24px 20px'}}>
    <span className="sl-section__eyebrow">dove siamo</span>
    <h2 className="sl-section__title">Come raggiungerci</h2>
  </div>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.8909115432425!2d12.70886866393499!3d42.57049259482503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132efbd9ad8e4add%3A0xea303da37a6a0a55!2s05100%20San%20Liberatore%20Province%20of%20Terni%2C%20Italy!5e1!3m2!1sen!2sse!4v1777021092524!5m2!1sen!2sse"
  width="100%"
  height="450"
  style={{ border: 0, display: 'block' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>

      {/* Sponsor strip */}
<div className="sl-sponsor-strip">
  <p className="sl-sponsor-strip__label">Con la partecipazione di:</p>
  <div className="sl-sponsor-strip__logos">
    <a href="https://www.instagram.com/gelateriaandrea?igsh=YmcxNzd6NnRhZjQ0" target="_blank" rel="noopener noreferrer">
      <img src="/festa1.png" alt="Gelateria Andrea" className="sl-sponsor-logo" />
    </a>
    <a href="https://www.instagram.com/lupizzicarolo?igsh=MTJ3bDAybzMzYWR2Yw==" target="_blank" rel="noopener noreferrer">
      <img src="/festa2.png" alt="Sponsor 2" className="sl-sponsor-logo" />
    </a>
  </div>
</div>
    </div>
  );
}
