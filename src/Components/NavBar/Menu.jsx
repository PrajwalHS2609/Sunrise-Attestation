import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RespMenuBlock from "./RespMenuBlock";

const Menu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(350px)";
  };

  return (
    <>
      <div className="menuContainer">
        <ul>
          <li id="menuHome">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faHome}
                className="menuIcon"
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li id="menuList">
            <Link to={"/uae-attestation"}>Attestation</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
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
            <Link to={"/apostille"}> Apostille</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
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
              icon={faAngleDown}
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
          <li>
            MOFA
            <FontAwesomeIcon
              icon={faAngleDown}
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
              icon={faAngleDown}
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
              icon={faAngleDown}
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
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop" id="translationDrop">
              <li>Document Translation</li>
              <li>Language Translation</li>
            </div>
          </li>
        </ul>

        <div onClick={showSideBar} className="mainMenu">
          <FontAwesomeIcon
            icon={faBars}
            className="menuBarIcon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h1>
            <h1 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h1>
          </ul>

          <RespMenuBlock menuName={menuName} items={items} />
          <RespMenuBlock menuName={menuName2} items={items} />
          <RespMenuBlock menuName={menuName3} items={items3} />

          <RespMenuBlock menuName={menuName4} items={items4} />
          <RespMenuBlock menuName={menuName5} items={items5} />
          <RespMenuBlock menuName={menuName6} items={items6} />

          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                WES
              </Link>
            </h1>
          </ul>
          <RespMenuBlock menuName={menuName7} items={items7} />
          {/* <ul>
            <h1></h1>
          </ul> */}
        </div>
      </div>
    </>
  );
};
const menuName = ["Attestation"];
const menuName2 = ["Apostille"];
const menuName3 = ["State HDR"];
const menuName4 = ["MOFA"];
const menuName5 = ["PCC"];
const menuName6 = ["MEA"];
const menuName7 = ["Translation"];

const items = [
  "Degree Certificate",
  " Birth Certificates",
  "Marriage Certificate",
  "Power of Attorney",
  " Medical Certificate",
  "Divorce Decree Certificate",
];
const items3 = [
  "Karnataka",
  "TamilNadu",
  "Kerala",
  "Maharastra",
  "Andhra Pradesh",
  "Telengana",
];
const items4 = [
  "Certificate Of Incorporation",
  "Memorandum of Association",
  "Memorandum of Association Power of Attorney",
  "Board Resolution",
  "Packaging list",
  "Certificate of Origin",
  "Chemical Analysis Report",
  "Physical Analysis Report",
  "Articles of Association",
];
const items5 = [
  "Oman PCC",
  "Kuwait PCC",
  "Kerala",
  "Saudi PCC<",
  "Qatar PCC",
  "UAE PCC",
];
const items6 = ["MEA Attestation", "MEA Apostille"];
const items7 = ["Document Translation", "Language Translation"];
export default Menu;
