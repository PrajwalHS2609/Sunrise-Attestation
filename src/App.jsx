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
import SwedenAttestation from './Components/AttestationCountries/SwedenAttestation/SwedenAttestation';
import LithuaniaAttestation from './Components/AttestationCountries/LithuaniaAttestation/LithuaniaAttestation';
import NetherlandAttestation from './Components/AttestationCountries/NetherlandAttestation/NetherlandAttestation';

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
          <Route path="/egypt-attestation" element={<EgyptAttestation />} />
          <Route path="/china-attestation" element={<ChinaAttestation />} />
          <Route path="/vietnam-attestation" element={<VietnamAttestation />} />
          <Route path="/taiwan-attestation" element={<TaiwanAttestation />} />
          <Route path="/nigeria-attestation" element={<NigeriaAttestation />} />
          <Route
            path="/malaysia-attestation"
            element={<MalaysiaAttestation />}
          />
          <Route
            path="/philippines-attestation"
            element={<PhilippinesAttestation />}
          />
          <Route
            path="/australia-apostille"
            element={<AustraliaAttestation />}
          />
          <Route path="/usa-apostille" element={<UsaAttestation />} />
          <Route path="/oman-apostille" element={<OmanAttestation />} />
    
          <Route path="/austria-apostille" element={<AustriaAttestation />} />
          <Route path="/uk-apostille" element={<UkAttestation />} />
          <Route path="/germany-apostille" element={<GermanyAttestation />} />
          <Route path="/mexico-apostille" element={<MexicoAttestation />} />
          <Route path="/france-apostille" element={<FranceAttestation />} />
          <Route path="/italy-apostille" element={<ItalyAttestation />} />
          <Route path="/sweden-apostille" element={<SwedenAttestation />} />
          <Route path="/lithuania-apostille" element={<LithuaniaAttestation />} />
          <Route path="/netherland-apostille" element={<NetherlandAttestation />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
