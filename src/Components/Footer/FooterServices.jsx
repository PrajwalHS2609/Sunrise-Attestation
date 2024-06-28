import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const FooterServices = () => {
  return (
    <div className="footerServiceContainer">
      <div className="footerServiceContent">
        <ul>
          <h3>Our Services</h3>
          <li>
            <Link to={"/"}>Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Apostille</Link>
          </li>
          <li>
            <Link to={"/"}> State HRD</Link>
          </li>
          <li>
            <Link to={"/"}>Home Department</Link>
          </li>
          <li>
            <Link to={"/"}>MOFA</Link>
          </li>
          <li>
            <Link to={"/"}>PCC</Link>
          </li>
          <li>
            <Link to={"/"}>MEA</Link>
          </li>
          <li>
            <Link to={""}>WES</Link>
          </li>
          <li>
            <Link to={"/"}>Translation</Link>
          </li>
        </ul>
      </div>
      <div className="footerServiceContent">
        <ul>
          <h3>Certificate Attestation</h3>
          <li>
            <Link to={"/"}>Qatar Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Kuwait Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Saudi Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Bahrain Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>China Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Vietnam Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Taiwan Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Egypt Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Nigeria Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Malaysia Embassy Attestation</Link>
          </li>
          <li>
            <Link to={"/"}>Philippines Embassy Attestation</Link>
          </li>
        </ul>
      </div>
      {/* <div className="footerServiceContent">
        <li>UAE Embassy Attestation</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div> */}
    </div>
  );
};

export default FooterServices;
