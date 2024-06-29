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
          <h3> Attestation</h3>
          <li>
            <Link to={"/"}>Qatar</Link>
          </li>
          <li>
            <Link to={"/"}>Kuwait</Link>
          </li>
          <li>
            <Link to={"/"}>Saudi</Link>
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
      <div className="footerServiceContent">
        <ul>
          <h3>Documents</h3>
          <li>
            <Link to={"/"}>Birth Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Marriage Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Salary Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Equivalence Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Single Status Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Ministry of education department</Link>
          </li>
          <li>
            <Link to={"/"}>Foreign Affairs (FA)</Link>
          </li>
          <li>
            <Link to={"/"}>Transfer Certificate (TC)</Link>
          </li>
          <li>
            <Link to={"/"}>Employment Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Medical Certificate</Link>
          </li>
          <li>
            <Link to={"/"}>Ministry of Health department</Link>
          </li>
          <li>
            <Link to={"/"}>Ministry of Justice</Link>
          </li>
          <li>
            <Link to={"/"}>Chamber of Commerce</Link>
          </li>
          <li>
            <Link to={"/"}>Labor Department</Link>
          </li>
          <li>
            <Link to={"/"}>Death Certificate</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterServices;
