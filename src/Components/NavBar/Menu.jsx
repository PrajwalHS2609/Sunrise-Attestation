import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef1 = useRef();
  let dropRef2 = useRef();
  let dropRef3 = useRef();
  let dropRef4 = useRef();
  let dropRef5 = useRef();
  let dropRef6 = useRef();
  let dropRef7 = useRef();

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(620px)";
  };

  let handleDropDown1 = () => {
    if (!drop) {
      setDrop(true);
      dropRef1.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef1.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown2 = () => {
    if (!drop) {
      setDrop(true);
      dropRef2.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef2.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown3 = () => {
    if (!drop) {
      setDrop(true);
      dropRef3.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef3.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown4 = () => {
    if (!drop) {
      setDrop(true);
      dropRef4.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef4.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown5 = () => {
    if (!drop) {
      setDrop(true);
      dropRef5.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef5.current.style.display = "none";
      console.log("up");
    }
  };
  let handleDropDown6 = () => {
    if (!drop) {
      setDrop(true);
      dropRef6.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef6.current.style.display = "none";
      console.log("up");
    }
  };

  let handleDropDown7 = () => {
    if (!drop) {
      setDrop(true);
      dropRef7.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef7.current.style.display = "none";
      console.log("up");
    }
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
            <Link to={"/certificate-attestation-bangalore"}>Attestation</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>
                <Link to={"/"}>Degree Certificate</Link>
              </li>
              <li>
                <Link to={"/birth-certificate-attestaion-bangalore"}>
                  Birth Certificates
                </Link>
              </li>
              <li>Marriage Certificate</li>
              <li>Commercial Documents</li>
            </div>
          </li>
          <li>
            <Link to={"/certificate-apostille-bangalore"}> Apostille</Link>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="menuIcon"
            ></FontAwesomeIcon>
            <div className="menuDrop">
              <li>Degree Certificate</li>
              <li>Birth Certificates</li>
              <li>Marriage Certificate</li>
              <li>Commercial Documents</li>
            </div>
          </li>
          <li>
            <Link to={"/state-hrd-home-department-attestation"}>State HRD</Link>
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
            <Link to={"/mofa-attestation-services"}> MOFA</Link>
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
            <Link to={"/mea-attestaion-apostille-services"}>MEA</Link>
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
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h2>
            <h2 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/certificate-attestation-bangalore"}
              >
                Attestation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown1}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef1}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Degree Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Birth Certificates
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Marriage Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Apostille
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown2}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef2}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Degree Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Birth Certificates
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Marriage Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/state-hrd-home-department-attestation"}
              >
                State HRD
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown3}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef3}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Karnataka
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    TamilNadu
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Kerala
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Maharastra
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Andhra Pradesh
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Telengana
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/mofa-attestation-services"}>
                MOFA
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown4}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef4}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Certificate Of Incorporation
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Memorandum of Association
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Memorandum of Association Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Board Resolution
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Export Invoice
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Packaging list
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Certificate of Origin
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Chemical Analysis Report
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Physical Analysis Report
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Articles of Association
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                PCC
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown5}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef5}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Oman PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Kuwait PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Saudi PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Qatar PCC
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    UAE PCC
                  </Link>
                </h3>
              </li>
            </span>
          </ul>

          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                MEA
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown6}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef6}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Attestation
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Apostille
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                WES
              </Link>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Translation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown7}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef7}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Document Translation
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/"}>
                    Language Translation
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact Us
              </Link>
            </h2>
          </ul>
          <div className="respMenuGap"></div>
        </div>
      </div>
    </>
  );
};
export default Menu;
