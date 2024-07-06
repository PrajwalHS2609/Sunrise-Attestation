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
import TaiwanAttestation from "./Components/AttestationCountries/TaiwanAttestation/TaiwanAttestation";
import UsaAttestation from "./Components/AttestationCountries/UsaAttestation/UsaAttestation";
import OmanAttestation from "./Components/AttestationCountries/OmanAttestation/OmanAttestation";
import NigeriaAttestation from "./Components/AttestationCountries/NigeriaAttestation/NigeriaAttestation";
import MalaysiaAttestation from "./Components/AttestationCountries/MalaysiaAttestation/MalaysiaAttestation";
import PhilippinesAttestation from "./Components/AttestationCountries/PhilippinesAttestation/PhilippinesAttestation";
import AustriaAttestation from "./Components/AttestationCountries/AustriaAttestation/AustriaAttestation";
import UkAttestation from "./Components/AttestationCountries/UkAttestation/UkAttestation";
import GermanyAttestation from "./Components/AttestationCountries/GermanyAttestation/GermanyAttestation";
import MexicoAttestation from "./Components/AttestationCountries/MexicoAttestation/MexicoAttestation";
import FranceAttestation from "./Components/AttestationCountries/FranceAttestation/FranceAttestation";
import ItalyAttestation from "./Components/AttestationCountries/ItalyAttestation/ItalyAttestation";
// import SwedenAttestation from "./Components/AttestationCountries/SwedenAttestation/SwedenAttestation";
import LithuaniaAttestation from "./Components/AttestationCountries/LithuaniaAttestation/LithuaniaAttestation";
import NetherlandAttestation from "./Components/AttestationCountries/NetherlandAttestation/NetherlandAttestation";
import AttestationPage from "./Components/AttestationPage/AttestationPage";
import ApostillePages from "./Components/ApostillePages/ApostillePages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/certificate-attestation-bangalore"
            element={<AttestationPage />}
          />
          <Route
            path="/certificate-apostille-bangalore"
            element={<ApostillePages />}
          />
          <Route
            path="/uae-embassy-attestation-bangalore"
            element={<UaeAttestationPage />}
          />
          <Route
            path="/qatar-embassy-attestation-bangalore"
            element={<QatarAttestation />}
          />
          <Route
            path="/bahrain-embassy-attestation-bangalore"
            element={<BahrainAttestation />}
          />
          <Route
            path="/saudi-embassy-attestation-bangalore"
            element={<SaudiAttestation />}
          />
          <Route
            path="/kuwait-embassy-attestation-bangalore"
            element={<KuwaitAttestation />}
          />
          <Route
            path="/egypt-embassy-attestation-bangalore"
            element={<EgyptAttestation />}
          />
          <Route
            path="/china-embassy-attestation-bangalore"
            element={<ChinaAttestation />}
          />
          <Route
            path="/vietnam-embassy-attestation-bangalore"
            element={<VietnamAttestation />}
          />
          <Route
            path="/taiwan-embassy-attestation-bangalore"
            element={<TaiwanAttestation />}
          />
          <Route
            path="/nigeria-embassy-attestation-bangalore"
            element={<NigeriaAttestation />}
          />
          <Route
            path="/malaysia-embassy-attestation-bangalore"
            element={<MalaysiaAttestation />}
          />
          <Route
            path="/philippines-embassy-attestation-bangalore"
            element={<PhilippinesAttestation />}
          />
          <Route
            path="/australia-apostille-attestation-bangalore"
            element={<AustraliaAttestation />}
          />
          <Route
            path="/usa-apostille-attestation-bangalore"
            element={<UsaAttestation />}
          />
          <Route
            path="/oman-apostille-attestation-bangalore"
            element={<OmanAttestation />}
          />

          <Route
            path="/austria-apostille-attestation-bangalore"
            element={<AustriaAttestation />}
          />
          <Route
            path="/uk-apostille-attestation-bangalore"
            element={<UkAttestation />}
          />
          <Route
            path="/germany-apostille-attestation-bangalore"
            element={<GermanyAttestation />}
          />
          <Route
            path="/mexico-apostille-attestation-bangalore"
            element={<MexicoAttestation />}
          />
          <Route
            path="/france-apostille-attestation-bangalore"
            element={<FranceAttestation />}
          />
          <Route
            path="/italy-apostille-attestation-bangalore"
            element={<ItalyAttestation />}
          />
          {/* <Route path="/sweden-apostille" element={<SwedenAttestation />} /> */}
          <Route
            path="/lithuania-apostille-attestation-bangalore"
            element={<LithuaniaAttestation />}
          />
          <Route
            path="/netherland-apostille-attestation-bangalore"
            element={<NetherlandAttestation />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
