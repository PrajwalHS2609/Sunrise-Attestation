import React from "react";
import OurServicesCard from "./OurServicesCard";
import "./OurServices.css";

const OurServicesMain = () => {
  return (
    <div className="ourServicesMainContainer">
      <OurServicesCard
        img="https://theattestation.in/assets/img/certificate%20attestation.webp"
        head="CERTIFICATE ATTESTATION SERVICES"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img="https://theattestation.in/assets/img/certificate%20attestation.webp"
        head="CERTIFICATE ATTESTATION SERVICES"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img="https://theattestation.in/assets/img/certificate%20attestation.webp"
        head="CERTIFICATE ATTESTATION SERVICES"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
    </div>
  );
};

export default OurServicesMain;
