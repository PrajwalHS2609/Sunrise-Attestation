import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import UpperNav from "./Components/UpperNav/UpperNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import UaeAttestationPage from "./Components/AttestationCountries/UaeAttestation/UaeAttestationPage";
import QatarAttestation from "./Components/AttestationCountries/QatarAttestation/QatarAttestation";
import BahrainAttestation from "./Components/AttestationCountries/BahrainAttestation/BahrainAttestation";
import SaudiAttestation from "./Components/AttestationCountries/SaudiAttestation/SaudiAttestation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uae-attestation" element={<UaeAttestationPage />} />
          <Route path="/qatar-attestation" element={<QatarAttestation />} />
          <Route path="/bahrain-attestation" element={<BahrainAttestation />} />
          <Route path="/saudi-attestation" element={<SaudiAttestation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
