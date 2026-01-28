import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./DesktopMenu.css";

type DesktopMenuProps = {
  onContact: () => void;
};

const items = [
  { label: "HOME", path: "/" },
  { label: "IL PROGETTO", path: "/Info" },
  { label: "CHI SIAMO", path: "/Chisiamo" },
  { label: "LA RESIDENZA 2025", path: "/Residenza" },
  { label: "CONTATTI", path: "#contact" },
];

export default function DesktopMenu({ onContact }: DesktopMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const activeIndex = items.findIndex(
    (item) => item.path !== "#contact" && location.pathname === item.path
  );

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      setPill({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <nav className="desktop-menu">
      {/* 🟡 ONE MORPHING HIGHLIGHT */}
      {pill.width > 0 && (
        <span
          className="menu-pill"
          style={{
            transform: `translate(${pill.left}px, -50%)`,
            width: pill.width,
          }}
          
        />
      )}

{items.map((item, index) => {
  const isActive =
    item.path !== "#contact" && location.pathname === item.path;

  const isHomeOrProgetto =
    location.pathname === "/" || location.pathname === "/Info";

  const inactiveColorClass =
    isActive
      ? "active"
      : isHomeOrProgetto
      ? "inactive-light"
      : "inactive-dark";

  return (
    <p
      key={item.label}
      ref={(el: HTMLParagraphElement | null) => {
        itemRefs.current[index] = el;
      }}
      className={`menu-item ${inactiveColorClass}`}
      onClick={() =>
        item.path === "#contact"
          ? onContact()
          : navigate(item.path)
      }
    >
      {item.label}
    </p>
  );
})}
    </nav>
  );
}
