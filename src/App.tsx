import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Info from "./Pages/Info"; // ← ADD THIS
import Galleria from "./Pages/Galleria"; // ← ADD THIS
import Residenza from "./Pages/Residenza";
import Chisiamo from "./Pages/Chisiamo";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />  {/* ← ADD THIS */}
        <Route path="/Galleria" element={<Galleria />} />  {/* ← ADD THIS */}
        <Route path="/Residenza" element={<Residenza />} />  {/* ← ADD THIS */}
        <Route path="/Chisiamo" element={<Chisiamo />} />  {/* ← ADD THIS */}



      </Routes>
    </BrowserRouter>
  );
}

export default App;
