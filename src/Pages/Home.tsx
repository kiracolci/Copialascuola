'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ContactPopup from "./ContactPopup";



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);



  // IMAGES FOR BACKGROUND SLIDESHOW
  const introImages = [
    '/homefoto/1.jpeg',
    '/homefoto/2.jpeg',
    '/homefoto/3.jpeg',
    '/5.png',
    '/homefoto/4.jpeg',

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === introImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<div className="main-container home-page">

     {/* 🌟 FULLSCREEN FADE LOOP SLIDESHOW */}
<div className="slideshow-container">
  {introImages.map((img, index) => (
    <div
      key={index}
      className={
        index === currentImageIndex 
          ? "slide fade-in" 
          : "slide fade-out"
      }
      style={{ backgroundImage: `url(${img})` }}
    />
  ))}
</div>


      {/* HEADER — unchanged */}

      {/* 🌟 HERO CONTENT (left side only now) */}
      <div className="hero-content">

        <p className="hero-subtitle">
          PROGETTO IN CORSO
          <span className="dots"><span>.</span><span>.</span><span>.</span></span>
        </p>

        <img src="/logo2.png" alt="La Scuoletta Logo" className="hero-logo-img" />

        <p className="hero-description">
Centro culturale per San Liberatore        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate('/Info')}>COSA STA SUCCEDENDO?</button>
          <button className="outline"   onClick={() => setShowContact(true)}>CONTATTI</button>
        </div>

      


        <div className="the-text">
          <p className="the-center-text">
            <span className="fase-static">FASE:</span>&nbsp;
            <span className="fase-blink">
              PIANIFICAZIONE ARCHITETTONICA
            </span>
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="scuoletta-footer">
        <p>© 2024 Progetto La Scuoletta | San Liberatore.</p>
        <p>Un futuro per un posto dimenticato | Strada Romita, Frazione San Liberatore (TR)</p>
      </div>
      {showContact && (
  <ContactPopup onClose={() => setShowContact(false)} />
)}

    </div>
  );
}
