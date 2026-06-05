import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Galleria from "./Pages/Galleria";
import Residenza from "./Pages/Residenza";
import Chisiamo from "./Pages/Chisiamo";
import Festa from "./Pages/Festa";

import DesktopMenu from "./Pages/DesktopMenu";
import ContactPopup from "./Pages/ContactPopup";
import MobileMenu from "./Pages/MobileMenu";

function AppInner() {
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <DesktopMenu onContact={() => setShowContact(true)} />
      <MobileMenu onContact={() => setShowContact(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Galleria" element={<Galleria />} />
        <Route path="/Residenza" element={<Residenza />} />
        <Route path="/Chisiamo" element={<Chisiamo />} />
        <Route path="/Festa" element={<Festa />} />
      </Routes>
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;