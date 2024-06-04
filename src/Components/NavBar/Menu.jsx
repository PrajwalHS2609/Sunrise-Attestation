import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSortDown, faBars } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <div className="menuContainer">
      <ul>
        <li id="menuHome">
          <FontAwesomeIcon icon={faHome} className="menuIcon"></FontAwesomeIcon>
        </li>
        <li id="menuList">
          Attestation
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>Degree Certificate</li>
            <li>Birth Certificates</li>
            <li>Marriage Certificate</li>
            <li>Power of Attorney</li>
            <li>Medical Certificate</li>
            <li>Divorce Decree Certificate</li>
          </div>
        </li>
        <li>
          Apostille
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>Degree Certificate</li>
            <li>Birth Certificates</li>
            <li>Marriage Certificate</li>
            <li>Power of Attorney</li>
            <li>Medical Certificate</li>
            <li>Divorce Decree Certificate</li>
          </div>
        </li>
        <li>
          State HRD
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>Karnataka</li>
            <li>TamilNadu</li>
            <li>Kerala</li>
            <li>Maharastra</li>
            <li>Andhra Pradesh</li>
            <li>Telengana</li>
          </div>
        </li>
        <li> Home Department</li>
        <li>
          MOFA
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>Certificate Of Incorporation</li>
            <li>Memorandum of Association</li>
            <li>Memorandum of Association Power of Attorney</li>
            <li>Board Resolution</li>
            <li>Export Invoice</li>
            <li>Packaging list</li>
            <li>Certificate of Origin</li>
            <li>Chemical Analysis Report</li>
            <li>Physical Analysis Report</li>
            <li>Articles of Association</li>
          </div>
        </li>
        <li>
          PCC
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>Oman PCC</li>
            <li>Kuwait PCC</li>
            <li>Saudi PCC</li>
            <li>Qatar PCC</li>
            <li>UAE PCC</li>
          </div>
        </li>
        <li>
          MEA
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop">
            <li>MEA Attestation</li>
            <li>MEA Apostille</li>
          </div>
        </li>
        <li>WES</li>
        <li>
          Translation
          <FontAwesomeIcon
            icon={faSortDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <div className="menuDrop" id="translationDrop">
            <li>Document Translation</li>
            <li>Document Translation</li>
          </div>
        </li>
      </ul>
      {/* <div className="menuTrack">
        <h3>Track Status</h3>
      </div> */}
      <div className="mainMenu">
        <FontAwesomeIcon
          icon={faBars}
          className="menuBarIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="respMenu">
        <ul>
          <li>Attestation</li>
          <li>Apostille</li>
          <li>VISA Stamping</li>
          <li>HRD & Home Department</li>
          <li>MEA Attestation</li>
          <li>MOFA Attestation</li>
          <li>About Us</li>
          <li>Track Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
