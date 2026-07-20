import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./DesktopMenu.css";

type DesktopMenuProps = {
  onContact: () => void;
};

type MenuItem =
  | { label: string; path: string; children?: never }
  | { label: string; path: null; children: { label: string; path: string }[] };

const items: MenuItem[] = [
  { label: "HOME", path: "/" },
  { label: "IL PROGETTO", path: "/Info" },
  { label: "CHI SIAMO", path: "/Chisiamo" },
  {
    label: "LE RESIDENZE",
    path: null,
    children: [
      { label: "LA RESIDENZA 2025", path: "/Residenza" },
      { label: "LA RESIDENZA 2026", path: "/Residenza26" },
    ],
  },
  { label: "LA FESTA", path: "/Festa" },
  { label: "CONTATTI", path: "#contact" },
];

export default function DesktopMenu({ onContact }: DesktopMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeIndex = items.findIndex((item) => {
    if (item.path && item.path !== "#contact") return location.pathname === item.path;
    if (item.children) return item.children.some((c) => location.pathname === c.path);
    return false;
  });

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeIndex]);

  return (
    <nav className="desktop-menu">
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
        const isActive = item.path && item.path !== "#contact"
          ? location.pathname === item.path
          : item.children
          ? item.children.some((c) => location.pathname === c.path)
          : false;

        const isHomeOrProgetto =
          location.pathname === "/" || location.pathname === "/Info";

        const inactiveColorClass = isActive
          ? "active"
          : isHomeOrProgetto
          ? "inactive-light"
          : "inactive-dark";

        if (item.children) {
          return (
            <div
              key={item.label}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`menu-item menu-item--dropdown ${inactiveColorClass}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {item.label} <span className="dropdown-arrow">▾</span>
              <div className={`menu-dropdown ${dropdownOpen ? "menu-dropdown--open" : ""}`}>
                {item.children.map((child) => (
                  <p
                    key={child.label}
                    className={`menu-dropdown-item ${location.pathname === child.path ? "menu-dropdown-item--active" : ""}`}
                    onClick={() => { navigate(child.path); setDropdownOpen(false); }}
                  >
                    {child.label}
                  </p>
                ))}
              </div>
            </div>
          );
        }

        return (
          <p
            key={item.label}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`menu-item ${inactiveColorClass}`}
            onClick={() => item.path === "#contact" ? onContact() : navigate(item.path!)}
          >
            {item.label}
          </p>
        );
      })}
    </nav>
  );
}