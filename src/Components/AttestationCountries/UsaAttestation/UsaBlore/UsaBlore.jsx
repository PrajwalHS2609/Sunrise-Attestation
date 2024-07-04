import React from "react";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import UsaBloreMain from "./UsaBloreMain";
const UsaBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="USA Attestation in Bangalore" />
      <UsaBloreMain />
    </div>
  );
};

export default UsaBlore;
