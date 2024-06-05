import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSortDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef = useRef();

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(340px)";
  };
  let handleDropDown = (e) => {
    e.preventDefault();
    e.stopPropagation()
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <>
      <div className="menuContainer">
        <ul>
          <li id="menuHome">
            <FontAwesomeIcon
              icon={faHome}
              className="menuIcon"
            ></FontAwesomeIcon>
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
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Attestation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" id="respDrop1" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Degree Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Birth Certificates
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Marriage Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Beauty Essentials
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Power of Attorney
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Apostille
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" id="respDrop2" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Degree Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Birth Certificates
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Marriage Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Beauty Essentials
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Power of Attorney
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Medical Certificate
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Divorce Decree Certificate
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                State HRD
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Karnataka
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    TamilNadu
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Kerala
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Maharastra
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Andhra Pradesh
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Telengana
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Home Department
              </Link>
            </h1>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                MOFA
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Certificate Of Incorporation
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Memorandum of Association
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Memorandum of Association Power of Attorney
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Board Resolution{" "}
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Export Invoice
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Packaging list
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Certificate of Origin
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Chemical Analysis Report
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Physical Analysis Report{" "}
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Articles of Association
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                PCC
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Oman PCC
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Kuwait PCC
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Saudi PCC
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Qatar PCC
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Andhra Pradesh
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    UAE PCC
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                MEA
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Attestation
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    MEA Apostille
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                WES
              </Link>
            </h1>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Translation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faSortDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Document Translation
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/"}>
                    Language Translation
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
