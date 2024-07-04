import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterAttest = () => {
  return (
    <div className="footerServiceContent">
      <h3>Attestation</h3>
      <ul>
        <li>
          <Link to={"/uae-attestation"}>UAE</Link>
        </li>
        <li>
          <Link to={"/qatar-attestation"}>Qatar</Link>
        </li>
        <li>
          <Link to={"/kuwait-attestation"}>Kuwait</Link>
        </li>
        <li>
          <Link to={"/saudi-attestation"}>Saudi Arabia</Link>
        </li>
        <li>
          <Link to={"/bahrain-attestation"}>Bahrain</Link>
        </li>
        <li>
          <Link to={"/china-attestation"}>China</Link>
        </li>
        <li>
          <Link to={"/vietnam-attestation"}>Vietnam</Link>
        </li>
        <li>
          <Link to={"/taiwan-attestation"}>Taiwan</Link>
        </li>
        <li>
          <Link to={"/egypt-attestation"}>Egypt</Link>
        </li>
        <li>
          <Link to={"/nigeria-attestation"}>Nigeria</Link>
        </li>
        <li>
          <Link to={"/malaysia-attestation"}>Malaysia</Link>
        </li>
        <li>
          <Link to={"/philippines-attestation"}>Philippines</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterAttest;
