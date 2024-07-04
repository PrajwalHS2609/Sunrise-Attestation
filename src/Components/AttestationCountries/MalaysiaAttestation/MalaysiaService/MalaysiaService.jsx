import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import MalaysiaServiceMain from "./MalaysiaServiceMain";

const MalaysiaService = () => {
  return (
    <div>
      <div className="uaeServiceContainer">
        <UaeServiceHead head="Nigeria Attestation Services in Bangalore" />
        <MalaysiaServiceMain />
      </div>
    </div>
  );
};

export default MalaysiaService;
