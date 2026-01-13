import "./Chisiamo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chisiamo() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="chisiamo-wrapper">

      {/* DESKTOP MENU */}
      <div className="top-menu desktop-menu">
        <p onClick={() => navigate("/")}>HOME</p>
        <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
        <p onClick={() => navigate("/Residenza")}>LA RESIDENZA 2025</p>
        <p onClick={() => setShowPopup(true)}>CONTATTI</p>
      </div>

      {/* MOBILE MENU */}
      <div
        className="hamburger mobile-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuOpen && (
        <div className="mobile-fullscreen">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>
          <p onClick={() => navigate("/")}>HOME</p>
          <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
          <p onClick={() => navigate("/Residenza")}>LA RESIDENZA 2025</p>
          <p onClick={() => setShowPopup(true)}>CONTATTI</p>
           {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setShowPopup(false)}>×</span>
            <p>
              Instagram:{' '}
              <a href="https://www.instagram.com/scuoletta_sanlib" target="_blank" rel="noreferrer">
                @scuoletta_sanlib
              </a><br/>
              Email:{' '}
              <a href="mailto:scuoletta.sanlib@gmail.com">
                scuoletta.sanlib@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
        </div>
      )}

      {/* TITLE SECTION */}
      <section className="chisiamo-title-section">
        <span className="chisiamo-eyebrow">CHI SIAMO</span>
        <h1 className="chisiamo-title">
          Le persone, le famiglie <br />
          <span>e le realtà che rendono possibile</span><br />
          La Scuoletta
        </h1>
      </section>

      {/* CONTENT GRID */}
      <section className="chisiamo-grid">

        {/* BOX – PROPRIETARI */}
        <div className="chisiamo-box wide">
          <h3>I Proprietari</h3>
          <p>
            Il progetto è promosso dalle famiglie <span className="highlight">Rapaccini</span> e
            <span className="highlight"> Rossi</span>, riunite nella società
            <span className="highlight"> Raro Srl</span>, proprietaria dell’edificio
            e del terreno retrostante.
          </p>
          <p>
            L’obiettivo è investire in modo condiviso per valorizzare il territorio,
            rinnovando un impegno attivo verso la comunità locale e i processi
            culturali e artistici.
          </p>
        </div>

        {/* BOX – RAPACCINI */}
        <div className="chisiamo-box">
          <h3>Famiglia Rapaccini</h3>
          <p>
            Presente a San Liberatore dagli anni Sessanta, la famiglia Rapaccini
            ha intrecciato medicina, arte e pedagogia.
          </p>
          <p>
            Giorgio Rapaccini, medico e pittore antroposofico, ha dedicato la sua vita
            allo studio del colore e all’espressione artistica.
          </p>
        </div>

        {/* BOX – ROSSI */}
        <div className="chisiamo-box">
          <h3>Famiglia Rossi</h3>
          <p>
            Legata profondamente a San Liberatore, la famiglia Rossi ha costruito
            una storia tra Italia e Sudafrica senza mai perdere il rapporto con il borgo.
          </p>
          <p>
            Un legame fatto di ritorni, memoria e relazioni mantenute nel tempo.
          </p>
        </div>

        {/* BOX – CURA */}
        <div className="chisiamo-box">
          <h3>C.U.R.A.</h3>
          <p>
            Centro Umbro Residenze Artistiche riconosciuto dalla Regione Umbria dal 2018.
          </p>
          <p>
            Promuove residenze multidisciplinari, incubazione progettuale,
            mediazione culturale e pratiche artistiche contemporanee.
          </p>
        </div>

        {/* BOX – DEMETRA */}
        <div className="chisiamo-box">
          <h3>Demetra</h3>
          <p>
            Associazione di promozione sociale fondata a Terni nel 2004.
          </p>
          <p>
            Opera nella rigenerazione urbana, inclusione sociale, arti performative
            e progettazione culturale radicata nei territori.
          </p>
        </div>

      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setShowPopup(false)}>×</span>
            <p>
              Instagram: <a href="https://www.instagram.com/scuoletta_sanlib" target="_blank" rel="noreferrer">
                @scuoletta_sanlib
              </a><br />
              Email: <a href="mailto:scuoletta.sanlib@gmail.com">
                scuoletta.sanlib@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

{/* FINAL CTA */}
<section className="chisiamo-footer-cta">
  <img
    src="/arrow.png"
    alt="Freccia decorativa"
    className="footer-arrow"
  />

  <h2>PARTECIPA ALLA RINASCITA.</h2>

  <p>
    Vuoi unirti a noi per dare nuova vita a San Liberatore?
    <span
      className="footer-contact"
      onClick={() => setShowPopup(true)}
    >
      {" "}Contattaci
    </span>
    {" "}per contribuire con idee
  </p>

  <div className="footer-legal">
    <p>© 2024 Progetto La Scuoletta | San Liberatore.</p>
    <p>
      Un futuro per un posto dimenticato | Strada Romita, Frazione San Liberatore (TR)
    </p>
  </div>
</section>

    </div>
  );
}
