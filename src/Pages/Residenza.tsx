import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Residenza.css";
import ContactPopup from "./ContactPopup";


export default function Residenza() {
  const navigate = useNavigate();
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showContact, setShowContact] = useState(false);



  const images = [
    "/fotoresidenza/17.jpeg",
"/fotoresidenza/1.jpeg",
"/fotoresidenza/2.jpeg",
"/fotoresidenza/3.jpg",
"/fotoresidenza/4.jpeg",
"/fotoresidenza/5.jpeg",
"/fotoresidenza/6.jpg",
"/fotoresidenza/7.jpeg",
"/fotoresidenza/16.jpeg",
"/fotoresidenza/15.jpeg",
"/fotoresidenza/8.jpg",
"/fotoresidenza/9.jpeg",
"/fotoresidenza/10.jpeg",
"/fotoresidenza/11.jpeg",
"/fotoresidenza/12.jpg",
"/fotoresidenza/13.jpeg",
"/fotoresidenza/14.jpeg",
"/fotoresidenza/18.jpeg",


  ];

  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* SLIDESHOW */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* EDITORIAL STAGE SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        rootMargin: "-2% 0px -2% 0px",
        threshold: 0,
      }
    );
  
    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="residenza-wrapper">

      {/* MENU */}
      <div className="top-menu desktop-menu">
        <p onClick={() => navigate("/")}>HOME</p>
        <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
        <p onClick={() => navigate("/Chisiamo")}>CHI SIAMO</p>
        <p onClick={() => setShowContact(true)}>CONTATTI</p>
        </div>

      <div className="hamburger mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div><div></div><div></div>
      </div>

      {menuOpen && (
        <div className="mobile-fullscreen">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>
          <p onClick={() => navigate("/")}>HOME</p>
          <p onClick={() => navigate("/Info")}>IL PROGETTO</p>
          <p onClick={() => navigate("/Chisiamo")}>CHI SIAMO</p>
          <p onClick={() => setShowContact(true)}>CONTATTI</p>


   <div className="logo">
     <img src="/logo2.png" alt="La Scuoletta Logo" className="hero-logo-img" />
   </div>
        </div>
      )}


      {/* EDITORIAL STAGE */}
<div className="residenza-editorial">

      {/* HERO */}
      <section className="residenza-hero">
      <span className="hero-label">LA RESIDENZA 2025</span>

      <h1 className="editorial-title">
  <span>CARTOGRAFIA</span>
  <span>AFFETTIVA E IMMATERIALE</span>
</h1>

       <p>di una comunità in trasformazione</p>

      </section>

      {/* INTRO EDITORIAL */}
<section className="intro-editorial">
  <div className="intro-text">
    <p>
    Cartografia affettiva e immateriale di una comunità in 
    trasformazione è un progetto di ascolto, mappatura e 
    restituzione collettiva realizzato a San Liberatore e i luoghi dintorni, 
    dai residenti della Residenza 2025: Chiara Pavolucci, Anna Martinatti e Federico D’Orazio.

    </p>
    <p>
    La residenza nasce con l’obiettivo di approfondire 
    la conoscenza del contesto locale e dei suoi attori,
     attivando un processo collaborativo e orizzontale di 
     ricerca e co-progettazione. Attraverso due settimane di 
     lavoro sul campo, svolto insieme agli abitanti, ai proprietari 
     e alle organizzazioni del territorio, il progetto ha raccolto 
     storie, memorie e relazioni, contribuendo a immaginare nuove visioni di cura e sviluppo per il luogo.
    Ne emerge una mappa non geografica ma relazionale, costruita dalle voci della comunità e le foto di Chiara Pavolucci.
    

    </p>
  </div>

  <figure className="intro-image">
    <img src="/artisti.jpeg" alt="I residenti della residenza" />
    <figcaption>
      I residenti: Chiara, Anna e Federico
    </figcaption>
  </figure>
</section>


      {/* CONTENT */}
      <section className="residenza-content">

        {/* TEXT */}
        <div className="residenza-text">

  <div ref={el => { sectionsRef.current[0] = el; }} className="section fade">
    <h3>PROLOGO</h3>

    <p>
      Ogni luogo custodisce una <span className="highlight">geografia invisibile</span>, fatta di voci,
      gesti, legami e assenze che continuano a parlare. A San Liberatore, una piccola
      frazione del comune di Terni, tra le case che si arrampicano sulla collina e la
      valle che scende verso Collestatte, questa geografia è stata tradotta in una
      <span className="highlight"> mappa collettiva</span>: non una cartina da consultare,
      ma una <span className="highlight">cartografia affettiva e immateriale</span>, emersa
      dalle storie, dalle memorie e dai desideri di chi vive quotidianamente questi territori.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[0]} alt="Prologo – La Residenza" />
  <img src={images[1]} alt="Prologo – La Residenza" />
</div>

    <p>
      Per quattordici giorni, noi – Federico D’Orazio, Anna Martinatti e Chiara Pavolucci –
      abbiamo esplorato questa dimensione durante una <span className="highlight">residenza di comunità</span>,
      condividendo con gli abitanti e i luoghi attraversati un tempo dilatato e intenso.
      Abbiamo camminato insieme per il paese, ascoltato testimonianze e aneddoti,
      raccolto ricordi e visioni per il futuro.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[2]} alt="Prologo – La Residenza" />
  <img src={images[3]} alt="Prologo – La Residenza" />
</div>
    <p>
      Abbiamo inoltre osservato le <span className="highlight">connessioni sottili</span> tra persone e spazi
      e scoperto come anche piccoli gesti di cura possano incidere sulla vita collettiva
      dei territori. L’ex scuola elementare di San Liberatore
      (<span className="highlight">la Scuoletta</span>), con le sue pareti ancora intrise di storie,
      è diventata il <span className="highlight">centro simbolico</span> di questo percorso.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[4]} alt="Prologo – La Residenza" />
  <img src={images[5]} alt="Prologo – La Residenza" />
</div>
    <p>
      Da spazio sospeso nel tempo a <span className="highlight">laboratorio di relazioni</span>,
      si è trasformato in una lente attraverso cui osservare il paese, la comunità
      e le sue trasformazioni. Allo stesso tempo, ha dimostrato come questi luoghi
      possano continuare a vivere e parlarci quando vengono abitati con attenzione,
      responsabilità e uno sguardo rivolto al futuro.
    </p>
  </div>

  <div ref={el => { sectionsRef.current[1] = el; }} className="section fade">
    <h3>ATLANTE DEL QUOTIDIANO</h3>

    <p>
      Tutto è iniziato dall’incontro con i vari membri della famiglia Rapaccini che,
      insieme ad un’altra famiglia del paese (la famiglia Rossi), hanno scelto di
      acquistare la vecchia scuola, facendosi interpreti di un
      <span className="highlight"> atto collettivo di continuità e restituzione</span>.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[6]} alt="Prologo – La Residenza" />
  <img src={images[7]} alt="Prologo – La Residenza" />
</div>
    <p>
      Grazie alle loro testimonianze, abbiamo trovato una chiave di lettura per comprendere
      meglio la storia del luogo: la scuola come centro educativo, come
      <span className="highlight"> fulcro di una socialità</span> che negli anni si è affievolita
      senza mai scomparire.
    </p>

    <p>
      Da quel momento si sono susseguiti numerosi incontri con Nadia, Mauro, Palma e Marcella
      e molti altri abitanti che ci hanno accolto con curiosità, piccoli gesti di cura,
      ricordi minuziosi o aneddoti ironici.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[8]} alt="Prologo – La Residenza" />
  <img src={images[9]} alt="Prologo – La Residenza" />
</div>
    <p>
      Da questi scambi preziosi è emerso il ritratto di una
      <span className="highlight"> comunità frammentata ma attiva</span>, in continua evoluzione:
      chi è rimasto, chi è tornato, chi guarda avanti senza dimenticare.
    </p>

    <p>
      Mappare, in questo senso, non è mai stato per noi un semplice gesto tecnico,
      ma un vero e proprio <span className="highlight">atto di ascolto e interpretazione</span>.
      Ogni racconto, ogni fotografia ritrovata, ogni passeggiata collettiva ha aggiunto
      una nuova sfumatura alla nostra comprensione dei luoghi.
    </p>

    <p>
      La mappa della Scuoletta è nata così: passo dopo passo, grazie ai suoi abitanti,
      come uno strumento che <span className="highlight">esiste e si modifica insieme al paese</span>,
      dove ogni informazione scaturisce da una relazione e ogni relazione si trasforma
      in un <span className="highlight">atto di cura e condivisione</span>.
    </p>
  </div>

{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[10]} alt="Prologo – La Residenza" />
  <img src={images[11]} alt="Prologo – La Residenza" />
</div>

  <div ref={el => { sectionsRef.current[2] = el; }} className="section fade">
    <h3>LE PERSONE E I LUOGHI</h3>
    <p> Le giornate trascorse a San Liberatore durante la residenza si sono riempite di <span className="highlight">incontri</span>, <span className="highlight">nomi</span> e <span className="highlight">luoghi scoperti</span>. Abbiamo camminato per il paese, esplorato i dintorni e seguito i sentieri che salgono fino al <span className="highlight">Parco Batteria</span>, tra i ruderi delle antiche postazioni di difesa costruite durante la Seconda guerra mondiale. Da lassù abbiamo ammirato la <span className="highlight">Cascata delle Marmore</span>, una presenza lontana ma affine che non passa di certo inosservata, dove la forza dell’acqua congiunge i territori circostanti. Siamo scesi poi a Collestatte, dove abbiamo raccolto varie storie e incontrato altri <span className="highlight">custodi della memoria</span>: Gora, socio attivo della Pro Loco e grafico; Dolce, Federico, David e Urania, memoria vivente e inedita del paese, che hanno condiviso con noi racconti, aneddoti, leggende e ricordi, paragonando San Liberatore e Collestatte a due fratelli separati da una valle. </p>

  <p> Abbiamo incontrato anche Maria Grazia, maestra d’asilo, che ci ha accolto nel Centro di Infanzia Gisa Giani, dove ci ha presentato il progetto della Scuola nel Bosco della Valnerina da lei ideato e divenuto un <span className="highlight">punto di riferimento</span> per il territorio. Ogni luogo visitato, ogni persona conosciuta ha aggiunto una nuova traccia a questa <span className="highlight">cartografia in divenire</span>. La chiesa, la piazza, i giardini, le case vuote, le scale di pietra, persino le finestre: tutto ha parlato e contribuito a raccontare la vita del borgo e della sua frazione. </p>
  </div>

  <div ref={el => { sectionsRef.current[3] = el; }} className="section fade">
    <h3>RADICI, MEMORIE E DESIDERI 
    </h3>
    <p> Da questa pratica diffusa di <span className="highlight">ascolto</span>, <span className="highlight">cura</span> e <span className="highlight">interpretazione</span> è nato un <span className="highlight">archivio intimo</span> di storie, voci e immagini. Le memorie raccolte non sono state trattate come reperti, ovvero come oggetti passivi da catalogare e riporre in una teca, ma come <span className="highlight">materia viva</span>: materia che nasce, influenza e costruisce a sua volta <span className="highlight">nuove relazioni</span>. Dai racconti di scuola alle fotografie delle feste di paese, dalle testimonianze di tradizioni passate alle ricette realizzate con le erbe raccolte nei campi, dai rintocchi delle campane al rumore delle fabbriche in lontananza. Tutto ha contribuito ad arricchire questo atlante del quotidiano. </p> <p> Accanto alle memorie, sono emersi anche i <span className="highlight">desideri</span>. Espressi con pudore o entusiasmo, ma pur sempre connotati da un forte senso di <span className="highlight">appartenenza</span> e <span className="highlight">responsabilità</span>, hanno rivelato ciò che la comunità immagina per sé e per il <span className="highlight">futuro</span> di questi luoghi. Il desiderio di tornare a incontrarsi, di riabitare gli spazi pubblici, di restituire <span className="highlight">vita e significato</span> alla <span className="highlight">Scuoletta</span>. Ogni memoria è una radice; ogni desiderio, un germoglio. </p>
    </div>

  <div ref={el => { sectionsRef.current[4] = el; }} className="section fade">
    <h3>LE IDEE, I GESTI E LA POESIA, DALLE FINESTRE UN SUSSURRO CHE DIVENTA VOCE</h3>

    <p>
    Durante la prima fase della residenza, abbiamo sentito fin da subito il bisogno di <span className="highlight">restituire</span>, anche in forma immediata, ciò che stavamo raccogliendo. L’occasione è arrivata grazie ad una <span className="highlight">citazione</span> trovata in una raccolta di poesie di Pietro Lanfiuti Baldi appartenente alla famiglia Rapaccini: “<span className="highlight">Quanno non ero voce, ma sussurru</span>”. Una frase breve, ma potente che è diventata il <span className="highlight">filo conduttore</span> del nostro percorso a San Liberatore.
    </p>
    {/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[12]} alt="Prologo – La Residenza" />
  <img src={images[13]} alt="Prologo – La Residenza" />
</div>
<p>Riportata su tessuto grazie alla collaborazione con Gora (CP Studio) e appesa alla finestra della chiesa, questa scritta ha segnato l’inizio del processo di scoperta e <span className="highlight">mappatura del territorio</span>, nonché la presenza di un piccolo presidio dove molte persone si sono fermate per condividere memorie e desideri. Una frase che rimanda inevitabilmente alla condizione attuale della vecchia scuola: una struttura fragile e impercettibile, ma pronta a <span className="highlight">parlare di nuovo</span>. Abbiamo deciso così di provare ad amplificare la sua voce durante una prima restituzione pubblica davanti all’edificio, che in quei giorni non era ancora accessibile.</p>
    <p>
    Appesi alle finestre, tre manifesti riportavano altrettante domande rivolte alla comunità per accompagnarla in un processo di <span className="highlight">immaginazione collettiva</span>. Queste domande sono scaturite dalle conversazioni dei giorni precedenti e formulate come un’eco collettiva:
Quali mondi coraggiosi possiamo inventare insieme?
Quali crepe vorresti custodire nel tempo?
Quali futuri desideri per la Scuoletta?
    </p>
    
    <p>Le persone si sono fermate, hanno letto e risposto alle domande, scrivendo su piccoli biglietti appoggiati lungo un muretto o appesi ai fili del bucato. È stato un momento semplice ma evocativo: la <span className="highlight">Scuoletta</span>, che da decenni taceva, tornava finalmente a <span className="highlight">dialogare</span>. Abbiamo poi dedicato un momento alle bambine e ai bambini della Scuola nel Bosco di Collestatte, che sono venuti a trovarci insieme alle maestre, raccogliendo desideri per il futuro della Scuoletta attraverso semplici parole e disegni.</p>
  </div>

  <div ref={el => { sectionsRef.current[5] = el; }} className="section fade">
    <h3>LA SCUOLETTA ORA PARLA</h3>

    <p>
    Dall’<span className="highlight">ascolto</span> alla <span className="highlight">partecipazione</span>, il passo è stato breve. Abbiamo visto nascere piccole alleanze, gesti spontanei di aiuto, curiosità condivisa. Persone che prima non si conoscevano si sono incontrate, altre si sono abbracciate dopo tanti anni, scambiando ricordi, idee e desideri e (ri)attivando un <span className="highlight">legame concreto</span> con la vecchia scuola e gli altri luoghi del paese.

Ed è proprio questo legame che abbiamo cercato di mostrare durante la seconda e ultima restituzione del nostro percorso a San Liberatore. Le persone si sono ritrovate in piazza per condividere un momento di festa. La piazza era di nuovo <span className="highlight">viva</span> come non lo era da tempo, e San Liberatore e Collestatte tornavano finalmente ad incontrarsi.
    </p>

    <p>
    Una serie di fotografie scattate da Chiara Pavolucci durante tutto il periodo di residenza sono state installate lungo le mura delle case di San Liberatore, accompagnate dai ricordi raccolti e trasformati in manifesti. Queste immagini rievocano i luoghi attraversati e le persone che li abitano, i paesaggi osservati e quelli a venire, ancora lontani ma già percepibili.
    </p>
    {/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[14]} alt="Prologo – La Residenza" />
  <img src={images[15]} alt="Prologo – La Residenza" />
</div>
    <p>
    Come l’eco dei desideri espressi che rimbomba tra le pareti della “vecchia” scuola: ora la sua voce è intensa e presente. È la <span className="highlight">Scuoletta</span> che parla. All’interno dell’edificio, una voce registrata leggeva le risposte raccolte durante la prima restituzione pubblica. Avvicinandosi alle sue finestre, era possibile ascoltare la Scuoletta che parlava, restituendo così ai luoghi i desideri delle persone che ci vivono.
    </p>
    <p> Sul muretto esterno, invece, fotografie d’archivio e ricordi scritti riportavano alla luce un passato ancora vivo, percepibile negli sguardi e nelle parole delle persone incontrate. Infine, in cuffia, era possibile ascoltare le voci degli abitanti di San Liberatore, montate a partire da alcune interviste registrate nei mesi precedenti da Davide Calloni, che si è reso disponibile a condividere i materiali audio. </p>
    <p>La mappatura, da semplice strumento di raccolta, si è trasformata in una <span className="highlight">pratica di cura</span>: un modo per osservare, valorizzare e ripensare ciò che già esiste, mettendo in luce connessioni spesso invisibili. Ci siamo resi conto che, dentro questa trama, convivono già elementi di governance, reti di sostegno e risorse utili per costruire il futuro della Scuoletta.</p>
    
  <p>La cura, qui, non è un gesto astratto, ma il modo stesso in cui la comunità si riattiva: parlando, raccontando, camminando insieme, condividendo esperienze quotidiane e immaginando nuovi usi per spazi che non hanno mai smesso di appartenere a tutti.

Allo stesso tempo, durante il periodo di residenza sono emerse anche le criticità legate alla vita in un territorio marginalizzato come San Liberatore. Questi fattori rendono ancora più preziosa ogni azione di cura, ascolto e partecipazione, evidenziando come il lavoro con le comunità non sia solo culturale, ma <span className="highlight">profondamente necessario</span> per la sopravvivenza e la vitalità dei luoghi.</p>
   
  </div>

  <div ref={el => { sectionsRef.current[6] = el; }} className="section fade">
  
  
    <h3>EPILOGO</h3>

    <p>
    Questa cartografia affettiva e immateriale di una comunità non è un punto d’arrivo, ma un <span className="highlight">orizzonte aperto</span>. È l’inizio di un racconto che cresce, si modifica e si arricchisce continuamente di voci e gesti che si aggiungono a quelli già presenti o narrati. Come ogni mappa, indica direzioni, ma lascia spazio all’imprevisto, <span className="highlight">alla scoperta e alla partecipazione</span> di chi abita i luoghi. In essa convivono passato, presente e futuro, memoria e progetto, istanze individuali e visioni collettive.
    </p>
{/* MOBILE IMAGE PAIR */}
<div className="mobile-image mobile-pair">
  <img src={images[16]} alt="Prologo – La Residenza" />
  <img src={images[17]} alt="Prologo – La Residenza" />
</div>
    <p>
    È un invito a continuare ad <span className="highlight">osservare</span>, <span className="highlight">ascoltare </span>e prendersi cura dei territori che abitiamo e attraversiamo. Perché una comunità in trasformazione è, in fondo, la più viva delle opere collettive: un organismo in continua evoluzione, capace di reinventarsi passo dopo passo.



    </p>
    
  </div>



          {/* BROCHURE */}
          <div className="brochure fade visible">
          <figcaption>
          Foto di Chiara Pavolucci, residenza 2025    </figcaption>
            <p>Approfondisci il progetto</p>
            <a href="/brochure-residenza.pdf" download>
              ↓ Scarica la brochure (PDF)
            </a>
          </div>

        </div>

        {/* IMAGES */}
        <div className="residenza-slideshow">
          <img src={images[current]} alt="La Residenza" />
  
        </div>

      </section>
      {showContact && (
  <ContactPopup onClose={() => setShowContact(false)} />
)}
      </div>

{/* FOOTER */}
<footer className="residenza-footer">
  <p className="footer-copy">
    © 2024 Progetto La Scuoletta | San Liberatore.
  </p>
  <p className="footer-sub">
    Un futuro per un posto dimenticato | Strada Romita, Frazione San Liberatore (TR)
  </p>
</footer>

    </div>

  );
}
