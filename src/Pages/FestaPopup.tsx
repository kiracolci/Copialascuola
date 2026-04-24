import { useNavigate } from "react-router-dom";
import "./FestaPopup.css";

type Props = { onClose: () => void };

export default function FestaPopup({ onClose }: Props) {
  const navigate = useNavigate();

  return (
    <div className="festa-popup" onClick={() => { navigate("/Festa"); onClose(); }}>
      <p className="festa-popup__eyebrow">30 maggio</p>
      <h2 className="festa-popup__title">ma tu ci vieni<br />alla festa??</h2>
      <p className="festa-popup__cta">scopri il programma →</p>
    </div>
  );
}