import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MobileMenu.css";

type MobileMenuProps = {
  onContact: () => void;
};

const items = [
  { label: "HOME", path: "/" },
  { label: "IL PROGETTO", path: "/Info" },
  { label: "CHI SIAMO", path: "/Chisiamo" },
  { label: "LA RESIDENZA 2025", path: "/Residenza" },
  { label: "CONTATTI", path: "#contact" },
];

export default function MobileMenu({ onContact }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
        {items.map((item) => {
          const isActive =
            item.path !== "#contact" &&
            location.pathname === item.path;

          return (
            <p
              key={item.label}
              className={`mobile-item ${isActive ? "active" : ""}`}
              onClick={() => {
                setOpen(false);
                item.path === "#contact"
                  ? onContact()
                  : navigate(item.path);
              }}
            >
              {item.label}
            </p>
          );
        })}

        {/* LOGO */}
        <div className="mobile-logo">
          <img src="/logo2.png" alt="La Scuoletta" />
        </div>
      </div>
    </>
  );
}
