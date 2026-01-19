import "./Chisiamo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPopup from "./ContactPopup";



export default function Chisiamo() {
 const navigate = useNavigate();
 const [menuOpen, setMenuOpen] = useState(false);
 const [showContact, setShowContact] = useState(false);



 return (
   <div className="chisiamo-wrapper">


     {/* DESKTOP MENU */}
     <div className="top-menu desktop-menu">
       <p onClick={() => navigate("/")}>HOME</p>
       <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
       <p onClick={() => navigate("/Residenza")}>LA RESIDENZA 2025</p>
       <p onClick={() => setShowContact(true)}>CONTATTI</p>
       </div>


     {/* MOBILE MENU */}
     <div
  className={`hamburger mobile-menu-icon ${menuOpen ? "open" : ""}`}
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
     

  <div className="logo">
    <img src="/logo2.png" alt="La Scuoletta Logo" className="hero-logo-img" />
  </div>
       </div>
     )}


     {/* TITLE SECTION */}
     <section className="chisiamo-hero">
  <span className="hero-label">CHI SIAMO</span>

  <div className="chisiamo-title-wrapper">
    <h1 className="chisiamo-title">
      Le persone, le famiglie <br />
      <em>e le realtà che rendono possibile</em> <br />
      La Scuoletta
    </h1>
  </div>
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
           rinnovando un impegno attivo verso la comunità locale e promuovendo processi
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
           una storia tra Italia e Sudafrica senza mai perdere il rapporto con il paese.
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
         <h3>Demetra APS</h3>
         <p>
           Associazione di promozione sociale fondata a Terni nel 2004.
         </p>
         <p>
           Opera nella rigenerazione urbana, inclusione sociale, arti performative
           e progettazione culturale radicata nei territori.
         </p>
       </div>


          {/* BOX – Associazione Antroposofica Ternana*/}
          <div className="chisiamo-box">
         <h3>Associazione Antroposofica Ternana</h3>
         <p>
      Gruppo dedicato allo studio e alla diffusione dell’antroposofia,
      la “scienza dello spirito” fondata da Rudolf Steiner, che guarda all’essere umano in modo integrato e profondo.      </p>
         <p>. L’associazione organizza conferenze, seminari e
           incontri su temi culturali, artistici e spirituali, valorizzando r
           iflessioni su pedagogia, salute, arte e scienza appartenenti al pensiero
            antroposofico. Fondata nel 1956, è una delle realtà antroposofiche storiche in Italia e
            offre momenti di confronto e crescita personale alla comunità di Terni.
         </p>


       </div>
        {/* BOX – Hacklab Terni Aps */}
        <div className="chisiamo-box">
         <h3>Hacklab Terni Aps</h3>
         <p>
         Associazione di promozione sociale che unisce tecnologia, creatività e condivisione del sapere.          </p>
         <p>
         Offre uno spazio aperto e collaborativo per workshop, laboratori ed eventi,
         promuovendo cultura digitale, software libero e apprendimento pratico.
          Un luogo dove idee e persone crescono insieme, rafforzando innovazione e
          comunità locale, attiva inclusiva.
         </p>
       </div>


       {/* BOX – Polimera APS */}
       <div className="chisiamo-box">
         <h3>Polimera APS</h3>
         <p>
         Associazione culturale con sede a Roma che promuove progetti artistici, sociali e partecipativi.          </p>
         <p>. Lavora su pratiche collettive, ricerca culturale ed eventi, creando spazi di incontro,
           sperimentazione e condivisione, con un forte attenzione alle comunità e ai territori.
         </p>


       </div>


          {/* BOX – Anonima Impresa Sociale */}
          <div className="chisiamo-box">
         <h3>Anonima Impresa Sociale</h3>
         <p>
         cooperativa sociale e culturale con sede a Perugia
          che da anni porta avanti progetti di rigenerazione urbana e culturale.         </p>
         <p>. Attiva dal 2014, promuove eventi, cinema di comunità e attività
           partecipative per la città e il territorio umbro.
           Ha dato nuova vita a spazi come il PostModernissimo, un cinema storico
            ripristinato e gestito con un forte spirito comunitario, oltre a collaborare a
            iniziative culturali e hub per il sociale e l’arte. La cooperativa crea occasioni
            di incontro e condivisione, valorizzando creatività e partecipazione locale.
         </p>


       </div>


          {/* BOX – ADD Academy Umbria ASD */}
          <div className="chisiamo-box">
         <h3>ADD Academy Umbria ASD</h3>
         <p>
         Associazione sportiva che diffonde l’Art du Déplacement (ADD), una disciplina di movimento creativo e consapevole.         </p>
         <p>. Basata su valori come rispetto, forza e collaborazione,
           organizza corsi, allenamenti ed eventi a Terni e in Umbria per
           tutte le età, favorendo crescita personale e comunità attiva.
         </p>


       </div>


     </section>


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

{showContact && (
  <ContactPopup onClose={() => setShowContact(false)} />
)}
   </div>
 );
}



