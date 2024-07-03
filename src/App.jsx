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
import KuwaitAttestation from "./Components/AttestationCountries/Kuwait/KuwaitAttestation";
import AustraliaAttestation from "./Components/AttestationCountries/Australia/AustraliaAttestation";
import EgyptAttestation from "./Components/AttestationCountries/EgyptAttestation/EgyptAttestation";
import ChinaAttestation from "./Components/AttestationCountries/ChinaAttestation/ChinaAttestation";
import VietnamAttestation from "./Components/AttestationCountries/VietnamAttestation/VietnamAttestation";

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
          <Route path="/kuwait-attestation" element={<KuwaitAttestation />} />
          <Route
            path="/australia-attestation"
            element={<AustraliaAttestation />}
          />
          <Route path="/egypt-attestation" element={<EgyptAttestation />} />
          <Route path="/china-attestation" element={<ChinaAttestation />} />
          <Route path="/vietnam-attestation" element={<VietnamAttestation />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
