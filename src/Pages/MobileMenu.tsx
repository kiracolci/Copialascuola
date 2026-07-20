import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MobileMenu.css";

type MobileMenuProps = {
  onContact: () => void;
};

export default function MobileMenu({ onContact }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [residenzeOpen, setResidenzOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isResidenzaActive =
    location.pathname === "/Residenza" || location.pathname === "/Residenza26";

  const goTo = (path: string) => {
    setOpen(false);
    setResidenzOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* ☰ / ❌ HAMBURGER */}
      <div
        className={`mobile-menu-icon ${open ? "open" : "closed"}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </div>

      {/* 📱 FULLSCREEN MENU */}
      <div className={`mobile-fullscreen ${open ? "show" : ""}`}>
        {/* LOGO */}
        <div className="mobile-logo-top">
          <img src="/logo2.png" alt="La Scuoletta" />
        </div>

        {/* ITEMS */}
        <div className="mobile-items">

          <p className={`mobile-item ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => goTo("/")}>HOME</p>

          <p className={`mobile-item ${location.pathname === "/Info" ? "active" : ""}`}
            onClick={() => goTo("/Info")}>IL PROGETTO</p>

          <p className={`mobile-item ${location.pathname === "/Chisiamo" ? "active" : ""}`}
            onClick={() => goTo("/Chisiamo")}>CHI SIAMO</p>

          {/* LE RESIDENZE */}
          <div className="mobile-residenze">
            <p
              className={`mobile-item mobile-item--parent ${isResidenzaActive ? "active" : ""}`}
              onClick={() => setResidenzOpen(!residenzeOpen)}
            >
              LE RESIDENZE
              <span className={`mobile-dropdown-arrow ${residenzeOpen ? "open" : ""}`}>▾</span>
            </p>
            <div className={`mobile-subitems ${residenzeOpen ? "mobile-subitems--open" : ""}`}>
              <p
                className={`mobile-subitem ${location.pathname === "/Residenza" ? "active" : ""}`}
                onClick={() => goTo("/Residenza")}
              >
                LA RESIDENZA 2025
              </p>
              <p
                className={`mobile-subitem ${location.pathname === "/Residenza26" ? "active" : ""}`}
                onClick={() => goTo("/Residenza26")}
              >
                LA RESIDENZA 2026
              </p>
            </div>
          </div>

          <p className={`mobile-item ${location.pathname === "/Festa" ? "active" : ""}`}
            onClick={() => goTo("/Festa")}>LA FESTA</p>

          <p className="mobile-item"
            onClick={() => { setOpen(false); onContact(); }}>CONTATTI</p>

        </div>
      </div>
    </>
  );
}