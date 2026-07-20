import { useEffect, useRef, useState } from "react";
import "./Residenza26.css";
import ContactPopup from "./ContactPopup";

export default function Residenza26() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showContact, setShowContact] = useState(false);
  const [showApply, setShowApply] = useState(false);

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
      { rootMargin: "-2% 0px -2% 0px", threshold: 0 }
    );
    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="r26-wrapper">
      <div className="r26-editorial">

        {/* HERO */}
        <section className="r26-hero">
          <span className="r26-label">La Residenza 2026</span>
          <h1 className="r26-title">
            <span>CALL PER</span>
            <span>2 RESIDENZE CREATIVE</span>
          </h1>
          <p>19 ottobre – 3 novembre 2026 · San Liberatore, Collestatte (TR)</p>
        </section>

        {/* VISUAL SUMMARY */}
        <div className="r26-summary r26-fade" ref={el => { sectionsRef.current[0] = el; }}>
          <div className="r26-cards">
            <div className="r26-card r26-card--accent">
              <span className="r26-card-value">19 OTT –<br />3 NOV</span>
              <span className="r26-card-label">Periodo</span>
            </div>
            <div className="r26-card">
              <span className="r26-card-value">San Liberatore</span>
              <span className="r26-card-label">Collestatte (TR)</span>
            </div>
            <div className="r26-card">
              <span className="r26-card-value">2</span>
              <span className="r26-card-label">Posti disponibili</span>
            </div>
            <div className="r26-card">
              <span className="r26-card-value">1.200€<br />+ alloggio</span>
              <span className="r26-card-label">Compenso lordo</span>
            </div>
            <div className="r26-card r26-card--deadline">
              <span className="r26-card-value">21 AGO<br />2026</span>
              <span className="r26-card-label">Scadenza candidature</span>
            </div>
          </div>

          <div className="r26-tags">
            <span className="r26-tag">Architettura</span>
            <span className="r26-tag">Fotografia</span>
            <span className="r26-tag">Ecologia</span>
            <span className="r26-tag">Narrazione Multimediale</span>
            <span className="r26-tag">Agronomia</span>
            <span className="r26-tag">Archivistica</span>
            <span className="r26-tag">Progettazione Culturale</span>
            <span className="r26-tag">Arboricoltura</span>
            <span className="r26-tag">Sostenibilità Energetica</span>
          </div>

          <div className="r26-btn-group">
  <button className="r26-apply-btn" onClick={() => setShowApply(true)}>
    APPLICA ORA
  </button>
  <a className="r26-download-btn" href="/26.pdf" download>
    SCARICA PIÙ INFORMAZIONI ↓
  </a>
</div>
        </div>

        <div className="r26-divider" />

        {/* INTRO */}
        <section className="r26-intro">
          <p>
            La Residenza a San Liberatore 2026 è una chiamata aperta rivolta a
            professionisti con esperienze in architettura, narrazione multimediale,
            archivistica e documentazione, fotografia, progettazione culturale,
            sostenibilità energetica, ecologia, agronomia e arboricoltura.
          </p>
          <p>
            Le 2 persone selezionate parteciperanno a un percorso residenziale
            durante le fasi di cantiere della Scuoletta, contribuendo a definire
            la visione di sviluppo per questo spazio ibrido dedicato alla comunità
            locale. La residenza è organizzata da La Scuoletta APS ETS, con il
            supporto di Associazione Demetra e Raro Srl, nell'ambito di C.U.R.A. –
            Centro Umbro Residenze Artistiche.
          </p>
        </section>

        {/* SECTIONS */}
        <div className="r26-sections">

          <div ref={el => { sectionsRef.current[1] = el; }} className="r26-section r26-fade">
            <h3>Contesto</h3>
            <p>
              San Liberatore, frazione di Collestatte con{" "}
              <span className="r26-highlight">meno di 100 abitanti</span>, è uno
              dei "luoghi del silenzio" per la sua posizione ai margini del{" "}
              <span className="r26-highlight">Parco fluviale del Nera</span>,
              lontano dai rumori della città.
            </p>
            <p>
              A San Liberatore c'è un piccolo edificio abbandonato che ha avuto
              per 30 anni la funzione di scuola e poi di circolo del paese. Venne
              costruito durante la{" "}
              <span className="r26-highlight">seconda guerra mondiale</span> a
              supporto dei militari che presidiavano la contraerea al Parco
              Batterie, per poi divenire la scuola elementare fino agli anni '60.
            </p>
            <p>
              L'obiettivo de{" "}
              <span className="r26-highlight">La Scuoletta APS ETS</span> è quello
              di creare un nuovo{" "}
              <span className="r26-highlight">circolo culturale</span>, che torni
              ad essere il centro della vita comunitaria, integrando il gioco, le
              arti, la cucina e il rapporto con la natura.
            </p>
          </div>

          <div ref={el => { sectionsRef.current[2] = el; }} className="r26-section r26-fade">
            <h3>Il Progetto in Corso</h3>
            <p>
              L'area di progetto è costituita da un{" "}
              <span className="r26-highlight">fabbricato di circa 200 mq</span> e
              un terreno scosceso composto in parte da bosco di querce e in parte
              da terreno seminativo-forestale, attualmente in{" "}
              <span className="r26-highlight">comodato d'uso a La Scuoletta APS ETS</span>.
            </p>
            <p>
              L'intenzione è realizzare un{" "}
              <span className="r26-highlight">circolo culturale</span> dedicato a
              laboratori educativi, artistici e formativi, con una piccola taverna
              come servizio collaterale. Lo sviluppo ruoterà intorno alla{" "}
              <span className="r26-highlight">crescita spirituale della persona</span>,
              prevedendo attività ludiche e artistiche e momenti dedicati alla
              promozione enogastronomica e turistica.
            </p>
            <p>
              <span className="r26-highlight">
                Il progetto architettonico è stato ultimato e i lavori cominceranno
                questo autunno.
              </span>{" "}
              Progetto: Francesco Andreani per Raro Srl.
            </p>
          </div>

          <div ref={el => { sectionsRef.current[3] = el; }} className="r26-section r26-fade">
            <h3>Obiettivi della Call</h3>
            <p>
              L'obiettivo principale è contribuire a sviluppare una visione di{" "}
              <span className="r26-highlight">sviluppo per uno spazio ibrido</span>{" "}
              dedicato alle associazioni, alla promozione del territorio e ad
              attività culturali, artistiche e ludiche.
            </p>
            <p>
              Le attività si concentreranno su due assi. Il primo:{" "}
              <span className="r26-highlight">documentazione, ricerca d'archivio e di buone pratiche</span>{" "}
              nel corso delle fasi di cantiere a supporto alla definizione degli
              spazi del futuro circolo culturale.
            </p>
            <p>
              Il secondo:{" "}
              <span className="r26-highlight">definizione delle sinergie funzionali ed ecologiche</span>{" "}
              tra il nuovo edificio e i terreni agricoli soprastanti, con
              l'intenzione di sviluppare un{" "}
              <span className="r26-highlight">percorso etno-botanico nel bosco</span>.
            </p>
            <p>
              Al termine della residenza è prevista una{" "}
              <span className="r26-highlight">restituzione con evento aperto alla comunità locale</span>.
              I candidati dovranno essere a conoscenza del lavoro svolto nella
              precedente Residenza 2025.
            </p>
          </div>

          <div ref={el => { sectionsRef.current[4] = el; }} className="r26-section r26-fade">
  <h3>Come Candidarsi</h3>
  <p>
    Possono candidarsi{" "}
    <span className="r26-highlight">professionisti di ogni età</span>,
    individualmente o in rappresentanza di associazioni o imprese.
    Saranno selezionate un massimo di{" "}
    <span className="r26-highlight">2 candidature</span>.
  </p>

  <div className="r26-deadline">
    <p>📩 scuoletta.sanlib@gmail.com</p>
    <p>Scadenza: 21 agosto 2026</p>
    <p>
      Max 15 MB · manifestazione di interesse (max 4.000 caratteri) +
      CV e/o portfolio
    </p>
  </div>

  <p>
    Per chiarimenti:{" "}
    <span className="r26-highlight">scuoletta.sanlib@gmail.com</span>
  </p>
  <button className="r26-apply-btn" onClick={() => setShowApply(true)}>
    APPLICA ORA
  </button>
</div>

          {/* CREDITS */}
          <div className="r26-credits">
            <p>
              La Residenza a San Liberatore 2026 è organizzata e realizzata da{" "}
              <strong>La Scuoletta APS ETS</strong>, con il supporto di Associazione
              Demetra e Raro Srl, nell'ambito di{" "}
              <em>C.U.R.A. Centro Umbro Residenze Artistiche</em>
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="r26-footer">
        <p>© 2026 Progetto La Scuoletta | San Liberatore.</p>
        <p>Un futuro per un posto dimenticato | Strada Romita, Frazione San Liberatore (TR)</p>
      </footer>

      {/* APPLY POPUP */}
      {showApply && (
        <div className="r26-popup-overlay" onClick={() => setShowApply(false)}>
          <div className="r26-popup" onClick={(e) => e.stopPropagation()}>
            <button className="r26-popup-close" onClick={() => setShowApply(false)}>✕</button>
            <p className="r26-popup-title">Come candidarsi</p>
            <div className="r26-popup-box">
              <p className="r26-popup-email">📩 scuoletta.sanlib@gmail.com</p>
              <p className="r26-popup-deadline">Scadenza: 21 agosto 2026</p>
              <p className="r26-popup-note">
                Max 15 MB · manifestazione di interesse (max 4.000 caratteri) + CV e/o portfolio
              </p>
            </div>
          </div>
        </div>
      )}

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </div>
  );
}