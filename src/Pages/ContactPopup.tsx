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

        <div className="contact-content">
  <div className="contact-text">
    <p className="contact-label">Contatti</p>

    <p>
      <span>Instagram</span><br />
      <a
        href="https://www.instagram.com/scuoletta_sanlib"
        target="_blank"
        rel="noreferrer"
      >
        @scuoletta_sanlib
      </a>
    </p>

    <p>
      <span>Email</span><br />
      <a href="mailto:scuoletta.sanlib@gmail.com">
        scuoletta.sanlib@gmail.com
      </a>
    </p>
  </div>

</div>
</div>
</div>

  );
}
