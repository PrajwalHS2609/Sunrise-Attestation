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
          <Link to={"/"}>Qatar</Link>
        </li>
        <li>
          <Link to={"/"}>Kuwait</Link>
        </li>
        <li>
          <Link to={"/"}>Saudi Arabia</Link>
        </li>
        <li>
          <Link to={"/"}>Bahrain</Link>
        </li>
        <li>
          <Link to={"/"}>China</Link>
        </li>
        <li>
          <Link to={"/"}>Vietnam</Link>
        </li>
        <li>
          <Link to={"/"}>Taiwan</Link>
        </li>
        <li>
          <Link to={"/"}>Egypt</Link>
        </li>
        <li>
          <Link to={"/"}>Nigeria</Link>
        </li>
        <li>
          <Link to={"/"}>Malaysia</Link>
        </li>
        <li>
          <Link to={"/"}>Philippines</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterAttest;
