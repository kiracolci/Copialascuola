import "./Info.css";
import { useState } from "react";

export default function Info() {
   const [showPopup, setShowPopup] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

return (
 <div className="info-wrapper">
   {/* HEADER */}
   <div className="info-hero">


   {/* DESKTOP MENU */}
<div className="top-menu desktop-menu">
 <p onClick={() => (window.location.href = "/")}>HOME</p>
 <p onClick={() => (window.location.href = "/Residenza")}>LA RESIDENZA 2025</p>
 <p onClick={() => (window.location.href = "/Chisiamo")}>CHI SIAMO</p>
 <p onClick={() => (window.location.href = "/Galleria")}>GALLERIA IMMAGINI</p>
 <p onClick={() => setShowPopup(true)}>CONTATTI</p>
</div>


{/* MOBILE MENU ICON */}
<div
 className="hamburger mobile-menu-icon"
 onClick={() => setMenuOpen(!menuOpen)}
>
 <div></div>
 <div></div>
 <div></div>
</div>


{/* FULLSCREEN MOBILE MENU */}
{menuOpen && (
 <div className="mobile-fullscreen">
   <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>


   <p onClick={() => (window.location.href = "/")}>HOME</p>
   <p onClick={() => (window.location.href = "/Residenza")}>LA RESIDENZA 2025</p>
   <p onClick={() => (window.location.href = "/Chisiamo")}>CHI SIAMO</p>
   <p onClick={() => (window.location.href = "/Galleria")}>GALLERIA IMMAGINI</p>
   <p onClick={() => setShowPopup(true)}>CONTATTI</p>


   <div className="logo">
     <img src="/logo2.png" alt="La Scuoletta Logo" className="hero-logo-img" />
   </div>
  
 </div>
)}
{/* HERO SECTION – DESKTOP (image left, text right) / MOBILE (text first) */}
<section className="dynamic-hero">
  <h1 className="dynamic-title">
    Dove il silenzio <br />
    <span>incontra la rinascita</span>
  </h1>

  <span className="dynamic-cta">IL PROGETTO</span>
</section>


</div>


   {/* SECTION: IL BORGO */}
   <section className="info-section">
 <h3 className="small-section-title">IL CONTESTO</h3>
 <h2 className="section-title">Il borgo e il territorio</h2>


 {/* SECTION: IL BORGO */}
 <section className="info-columns-wrapper">
 <div className="info-column">
   <h3 className="column-title">Quiete e Natura</h3>
   <p className="column-subtitle">Luogo del Silenzio</p>
   <p className="column-text">
     San Liberatore, frazione con meno di 100 abitanti ai margini del <a href="https://www.parcodelnera.it/" className="smart-link">
   Parco fluviale del Nera
</a>, si distingue per la sua posizione isolata, lontana dai
     rumori urbani. È un rifugio naturale, ideale per la meditazione e la
     riconnessione con l’ambiente.
   </p>
 </div>


 <div className="info-column">
   <h3 className="column-title">Connessioni e Sport</h3>
   <p className="column-subtitle">Snodo Turistico</p>
   <p className="column-text">
     Accessibile dalla Strada Romita, il borgo è un punto nevralgico per
     l’escursionismo. Offre percorsi diretti verso il Parco Batteria e la
     <a href="https://cascatadellemarmore.info/" className="smart-link">
   Cascata delle Marmore </a>, raggiungibile in 10 minuti in auto o circa 40 minuti a piedi, che accoglie ogni anno oltre 400.000 visitatori, confermandosi una delle mete piu visitate in Umbria. Inoltre offre percosi per bici diventando un
     riferimento per gli amanti di mountain bike e <a href="https://it.wikiloc.com/percorsi-mountain-bike/marmore-madonna-dello-scoglio-san-liberatore-bike-park-20875288" className="smart-link">
  downhill
</a>.
   </p>
 </div>


 <div className="info-column">
   <h3 className="column-title">Storia e comunità</h3>
   <p className="column-subtitle">La Chiesa e gli Abitanti</p>
   <p className="column-text">
   Il Borgo di San Liberatore ospita la Chiesa di
Santa Croce, risalente ai primi del XVI secolo
che contiene alcuni aﬀreschi cinquecenteschi
ed una cappella con una scritta in volgare
datata 24 Luglio 1512.
Poco distante si trova l’edificio che era destinato
ad essere la scuola del paese. Venne
costruito durante la seconda guerra mondiale a
supporto dei militari che presidiavano la
contraerea al Parco Batteria, per poi divenire
la scuola elementare
   </p>
 </div>
</section>
</section>








   {/* BIG IMAGE 2 */}
   <img src="/12.png" className="info-image-full" alt="Paesaggio 2" />








   {/* SECTION: FUTURO CULTURALE */}
   <section className="info-section">
     <h3 className="small-section-title">RIGENERAZIONE</h3>
     <h2 className="section-title">La scuoletta: un futuro culturale</h2>








     <div className="info-columns">
       <div className="highlight-box-large">
         <h4><span className="highlight1">★</span>  L’ambito di intervento <span className="highlight1">★</span> </h4>
         <p>
           L’edificio di circa 200 mq, utilizzato in passato come scuola e
           circolo, è abbandonato da decenni e richiede un recupero strutturale.
           L’area comprende anche un terreno scosceso (bosco di querce e
           seminativo).
         </p>
         <h4><span className="highlight1">★</span>  La visione <span className="highlight1">★</span> </h4>
         <p>          Trasformare la Scuoletta in un caso studio  per il rilancio delle aree interne, riportandola alla sua vocazione <span className="highlight">educativa e culturale</span>.
         Particolare attenzione sarà data alla cura
dell’ambiente circostante, raccogliendo buone
pratiche dal territorio e creando momenti di
confronto e apprendimento tra residenti.
         </p>
       </div>








       <div className="highlight-box-large">
         <h4> <span className="highlight1">★</span> Il centro culturale ed i servizi <span className="highlight1">★</span>  </h4>
         <p>
           Il progetto si concentra sulla <span className="highlight">crescita della persona</span> e sul confronto
           interdisciplinare, offrendo uno spazio <span className="highlight">dinamico e creativo</span>. Attività
           dedicate all’arte, allo <span className="highlight">scambio culturale</span> e alla meditazione.
         </p>
         <p>
           Promozione enogastronomica e cura dell’ambiente. Realizzazione di un
           centro per barattare i saperi e la formazione. Potenziali servizi
           collaterali: ciclofficina e piccolo Bistrot.
         </p>
         <p>
           

           In stretto contatto con il tessuto sociale e la
conoscenza locale, sarà possibile proporre agli
ospiti giornate dedicate alla scoperta dei boschi
e delle piante spontanee.
I prodotti del territorio verranno promossi
all’interno della proposta del Bistrot, con un
menù a base di materie prime locali.
         </p>
       </div>
     </div>
   </section>




{/* PROJECT STATUS BANNER */}
<div className="project-banner">
  <div className="marquee">
  <div className="marquee-track">
  <span>PROGETTO IN CORSO · PROGETTO IN CORSO · PROGETTO IN CORSO ·</span>
  <span>PROGETTO IN CORSO · PROGETTO IN CORSO · PROGETTO IN CORSO ·</span>
  <span>PROGETTO IN CORSO · PROGETTO IN CORSO · PROGETTO IN CORSO ·</span>
  <span>PROGETTO IN CORSO · PROGETTO IN CORSO · PROGETTO IN CORSO ·</span>
</div>
  </div>
</div>








   {/* FOOTER CTA */}
   <section className="info-footer">
     <img src="/arrow.png" alt="decorazione" className="footer-arrow" />
     <h2>PARTECIPA ALLA RINASCITA.</h2>
     <p>
 Vuoi unirti a noi per dare nuova vita a San Liberatore?{" "}
 <span className="footer-contact underline-contact" onClick={() => setShowPopup(true)}>
 Contattaci
</span>
  per contribuire con idee
</p>








     <div className="info-legal">
       <p>© 2024 Progetto La Scuoletta | San Liberatore.</p>
       <p>
         Un futuro per un posto dimenticato | Strada Romita, Frazione San
         Liberatore (TR)
       </p>
     </div>
     {/* POPUP */}
{showPopup && (
 <div className="popup">
   <div className="popup-content">
     <span className="close-btn" onClick={() => setShowPopup(false)}>
       &times;
     </span>
     <p>
       Instagram:{" "}
       <a
         href="https://www.instagram.com/scuoletta_sanlib?igsh=MWlzdmQ3NG50MnNzdw%3D%3D"
         target="_blank"
         rel="noreferrer"
       >
         @scuoletta_sanlib
       </a>
       <br />
       Email:{" "}
       <a href="mailto:scuoletta.sanlib@gmail.com">
         scuoletta.sanlib@gmail.com
       </a>
     </p>
   </div>
 </div>
)}


   </section>
 </div>
);
}























