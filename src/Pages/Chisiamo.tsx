import "./Chisiamo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "./ContactPopup";

export default function Chisiamo() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const partners = [
    {
      id: "proprietari",
      title: "I Proprietari",
      content: (
        <>
          <p>
          Il progetto è promosso dalle famiglie <span className="highlight">Rapaccini</span> e{" "}
            <span className="highlight">Rossi</span>, riunite nella società{" "}
            <span className="highlight">Raro Srl</span>, proprietaria dell’edificio e del terreno retrostante.
          </p>
          <p>
          L’obiettivo è investire in modo condiviso per valorizzare il
           territorio, rinnovando un impegno attivo verso la comunità locale 
           e promuovendo processi culturali e artistici.

          </p>
        </>
      ),
    },
    {
      id: "rapaccini",
      title: "Famiglia Rapaccini",
      content: (
        <>
          <p>
          Presente a San Liberatore dagli anni Sessanta, 
          la famiglia Rapaccini ha intrecciato medicina, 
          arte e pedagogia. 

          </p>
          <p>
          Giorgio Rapaccini, medico e pittore antroposofico, 
          ha dedicato la sua vita allo studio del colore e all’espressione artistica.
          </p>
        </>
      ),
    },
    {
      id: "rossi",
      title: "Famiglia Rossi",
      content: (
        <>
          <p>
          Legata profondamente a San Liberatore, la famiglia Rossi ha
           costruito una storia tra Italia e Sudafrica senza mai perdere il rapporto con il paese.
Un legame fatto di ritorni, memoria e relazioni mantenute nel tempo.

          </p>
        </>
      ),
    },
    {
      id: "cura",
      title: "C.U.R.A.",
      content: (
        <>
          <p>
          Centro Umbro Residenze Artistiche riconosciuto dalla Regione Umbria dal 2018.
Promuove residenze multidisciplinari, incubazione progettuale, mediazione culturale e pratiche artistiche contemporanee.
          </p>
        </>
      ),
    },
    {
      id: "demetra",
      title: "Demetra APS",
      content: (
        <>
          <p>Associazione di promozione sociale fondata a Terni nel 2004.
Opera nella rigenerazione urbana, inclusione sociale, arti
 performative e progettazione culturale radicata nei territori.</p>
          
        </>
      ),
    },
    {
      id: "antroposofica",
      title: "Associazione Antroposofica Ternana",
      content: (
        <>
          <p>
            Gruppo dedicato allo studio e alla diffusione dell’antroposofia fondata da Rudolf Steiner.
          </p>
          <p>
            Organizza conferenze, seminari e incontri su arte, pedagogia, salute e scienza spirituale.
          </p>
        </>
      ),
    },
    {
      id: "hacklab",
      title: "Hacklab Terni APS",
      content: (
        <>
          <p>
            Associazione che unisce tecnologia, creatività e condivisione del sapere.
          </p>
          <p>
            Offre uno spazio aperto per workshop, laboratori ed eventi collaborativi.
          </p>
        </>
      ),
    },
    {
      id: "polimera",
      title: "Polimera APS",
      content: (
        <>
          <p>Associazione culturale con sede a Roma.</p>
          <p>
            Promuove pratiche collettive, ricerca culturale ed eventi partecipativi
            con attenzione alle comunità.
          </p>
        </>
      ),
    },
    {
      id: "anonima",
      title: "Anonima Impresa Sociale",
      content: (
        <>
          <p>
          Associazione nata nel 2025, 
          con sede a Perugia e operativa a Spazio Modu. 
          Promozione artistica del territorio, produzione musicale, network professionale per artisti e creativi.

          </p>
        </>
      ),
    },
    {
      id: "add",
      title: "ADD Aps",
      content: (
        <>
          <p>
          Associazione di promozione sociale nata nel 2024, con sede a Terni.
Laboratori di autocostruzione, pratiche architettoniche sostenibili, ricerca multidisciplinare.
          </p>
        
        </>
      ),
    },

    {
      id: "edit",
      title: "EDIT Cooperativa Sociale",
      content: (
        <>
          <p>
          Cooperativa fondata nel 2009 con sede a Terni,
           promotrice del progetto Pecore Gialle a Strettura (PG)
            vicinissima alla Valnerina. Si occupa di inserimento 
            lavorativo di categorie svantaggiate, progetta e realizza
             beni e servizi educativi, formativi ed informativi attraverso 
             partecipazione, pratica dei diritti e sviluppo di relazioni positive con l’ambiente e la società.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="chisiamo-wrapper">

      {/* MENU */}
      

     {/* DESKTOP MENU */}
     <div className="top-menu desktop-menu">
       <p onClick={() => navigate("/")}>HOME</p>
       <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
       <p onClick={() => navigate("/Residenza")}>LA RESIDENZA 2025</p>
       <p onClick={() => setShowContact(true)}>CONTATTI</p>
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
         <p onClick={() => setShowContact(true)}>CONTATTI</p>

      </div>
    )}
      {/* HERO */}
      <section className="chisiamo-hero">
        <span className="hero-label">CHI SIAMO</span>
        <h1 className="chisiamo-title">
          Le persone, le famiglie <br />
          <em>e le realtà che rendono possibile</em> <br />
          La Scuoletta
        </h1>
        <p className="chisiamo-subtitle">
  Per scoprire di più su ogni realtà, clicca sui nomi.
</p>

      </section>

      {/* BUBBLES */}
      <section className="bubble-area">
        {partners.map((p, i) => (
          <button
            key={p.id}
            className={`bubble bubble-${i % 5}`}
            onClick={() => setActive(p.id)}
          >
            {p.title}
          </button>
        ))}
      </section>

       {/* POPUP */}
       {active && (
        <div className="bubble-popup" onClick={() => setActive(null)}>
          <div className="bubble-popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setActive(null)}>×</span>
            <h3>{partners.find(p => p.id === active)?.title}</h3>
            {partners.find(p => p.id === active)?.content}
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
     onClick={() => setShowContact(true)}
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


      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </div>
  );
}
