import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Galleria from "./Pages/Galleria";
import Residenza from "./Pages/Residenza";
import Chisiamo from "./Pages/Chisiamo";

import DesktopMenu from "./Pages/DesktopMenu";
import ContactPopup from "./Pages/ContactPopup";
import MobileMenu from "./Pages/MobileMenu";


function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <BrowserRouter>
      {/* ✅ PERSISTENT MENU (NEVER UNMOUNTS) */}
      <DesktopMenu onContact={() => setShowContact(true)} />
      <MobileMenu onContact={() => setShowContact(true)} />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Galleria" element={<Galleria />} />
        <Route path="/Residenza" element={<Residenza />} />
        <Route path="/Chisiamo" element={<Chisiamo />} />
      </Routes>

      {showContact && (
        <ContactPopup onClose={() => setShowContact(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;
