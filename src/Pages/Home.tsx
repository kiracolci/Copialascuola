'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [blipLeft, setBlipLeft] = useState(true);
  const [blipRight, setBlipRight] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // IMAGES FOR BACKGROUND SLIDESHOW
  const introImages = [
    '/14.PNG',
    '/11.JPG',
    '/3.PNG',
    '/5.png'
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
      <div className="top-menu desktop-menu">
        <p onClick={() => navigate('/Info')}>IL PROGETTO</p>
        <p onClick={() => navigate('/Residenza')}>LA RESIDENZA 2025</p>
        <p onClick={() => navigate('/Chisiamo')}>CHI SIAMO</p>
        <p onClick={() => navigate('/Galleria')}>GALLERIA IMMAGINI</p>
        <p onClick={() => setShowPopup(true)}>CONTATTI</p>
      </div>

      {/* MOBILE MENU */}
      <div className="hamburger mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div><div></div><div></div>
      </div>

      {menuOpen && (
        <div className="mobile-fullscreen">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>

          <p onClick={() => navigate('/Info')}>IL PROGETTO</p>
          <p onClick={() => navigate('/Residenza')}>LA RESIDENZA 2025</p>
          <p onClick={() => navigate('/Chisiamo')}>CHI SIAMO</p>
          <p onClick={() => navigate('/Galleria')}>GALLERIA IMMAGINI</p>
          <p onClick={() => setShowPopup(true)}>CONTATTI</p>

          <div className="logo">
            <img src="/logo2.png" alt="La Scuoletta Logo" className="hero-logo-img" />
          </div>
        </div>
      )}

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
          <button className="outline" onClick={() => setShowPopup(true)}>CONTATTACI</button>
        </div>

        <div className="footer-text">
          <p className="footer-center-text">
            <span className="fase-static">FASE:</span>&nbsp;
            <span className="fase-blink">
              PIANIFICAZIONE ARCHITETTONICA
            </span>
          </p>
        </div>

      </div>

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

      {/* FOOTER */}
      <div className="scuoletta-footer">
        <p>© 2024 Progetto La Scuoletta | San Liberatore.</p>
        <p>Un futuro per un posto dimenticato | Strada Romita, Frazione San Liberatore (TR)</p>
      </div>

    </div>
  );
}
