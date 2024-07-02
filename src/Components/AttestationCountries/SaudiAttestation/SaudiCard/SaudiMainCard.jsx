import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import saudiFlag from "./../../../../vid&img/Countries_Flag/Saudi Arabia.png";
import saudiEmbassy from "./../../../../vid&img/Embassy/Saudi.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const SaudiMainCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={saudiFlag}
        altFlag="saudiFlag"
        embassy={saudiEmbassy}
        altEmbassy="saudiEmbassy"
      />
    </div>
  );
};

export default SaudiMainCard;
