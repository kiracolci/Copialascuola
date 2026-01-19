// ContactPopup.tsx
import "./ContactPopup.css";

type Props = {
  onClose: () => void;
};

export default function ContactPopup({ onClose }: Props) {
  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close" onClick={onClose}>
          ×
        </button>

        <p className="contact-label">Contatti</p>

        <div className="contact-block">
          <span className="contact-title">Instagram</span>
          <a
            href="https://www.instagram.com/scuoletta_sanlib"
            target="_blank"
            rel="noreferrer"
          >
            @scuoletta_sanlib
          </a>
        </div>

        <div className="contact-block">
          <span className="contact-title">Email</span>
          <a href="mailto:scuoletta.sanlib@gmail.com">
            scuoletta.sanlib@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
