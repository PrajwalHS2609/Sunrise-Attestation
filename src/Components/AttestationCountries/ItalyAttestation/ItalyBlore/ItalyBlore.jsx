import React from "react";
import ItalyBloreMain from "./ItalyBloreMain";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
const ItalyBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Italy Attestation in Bangalore" />
      <ItalyBloreMain />
    </div>
  );
};

export default ItalyBlore;
