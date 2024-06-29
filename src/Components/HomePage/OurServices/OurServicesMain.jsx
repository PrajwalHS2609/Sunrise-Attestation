import React from "react";
import OurServicesCard from "./OurServicesCard";
import "./OurServices.css";
import attestation from "./../../../vid&img/Service Images/Attestation.png";
import appostille from "./../../../vid&img/Service Images/Apostille.png";
import mofa from "./../../../vid&img/Service Images/MOFA.png";
import pcc from "./../../../vid&img/Service Images/PCC.png";
import mea from "./../../../vid&img/Service Images/MEA.png";
import wes from "./../../../vid&img/Service Images/Wes.png";
import translation from "./../../../vid&img/Service Images/Translation.png";
import hrd from "./../../../vid&img/Service Images/State HRD.png";
const OurServicesMain = () => {
  return (
    <div className="ourServicesMainContainer">
      <OurServicesCard
        img={attestation}
        head="ATTESTATION"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={appostille}
        head="APOSTILLE"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={hrd}
        head="STATE HRD"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={mofa}
        head="MOFA"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={pcc}
        head="PCC"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={mea}
        head="MEA"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={wes}
        head="WES"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
      <OurServicesCard
        img={translation}
        head="Translation"
        para="Certificate attestation Services is the process of verifying with confirming archives when an individual is heading out to foreign nation..."
      />
    </div>
  );
};

export default OurServicesMain;
