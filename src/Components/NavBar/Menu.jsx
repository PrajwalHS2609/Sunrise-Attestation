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
  let dropRef = useRef();

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

  let handleDropDown = () => {
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
              <Link onClick={hideSideBar} to={"/courses"}>
                Attestation
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a1-german-course"}>
                    Degree Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a2-german-course"}>
                    Birth Certificates
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b1-german-course"}>
                    Marriage Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/courses"}>
                Apostille
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a1-german-course"}>
                    Degree Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a2-german-course"}>
                    Birth Certificates
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b1-german-course"}>
                    Marriage Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Power of Attorney
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Medical Certificate
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    Divorce Decree Certificate
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          {/* <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/exam-preparation"}>
                Exam Preparation
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/about-us"}>
                About
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact
              </Link>
            </h2>
          </ul>
          <div className="respMenuGap">
            <button>
              <a href="">Speak to advisor</a>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Menu;
