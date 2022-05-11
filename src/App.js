import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* si la route n'est pas définie on revient vers home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
