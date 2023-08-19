import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import Participation from "./pages/Participation";
import Prizes from "./pages/Prizes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Theme />} />
          <Route path="/participation" element={<Participation />} />
          <Route path="/prizes" element={<Prizes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
