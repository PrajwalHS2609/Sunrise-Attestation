import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const UpperNav = () => {
  return (
    <div className="upperNavContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faPhone}
            className="menuIcon"
          ></FontAwesomeIcon>
          +91 7777777777
        </li>
      </ul>
      <div className="upperLogo">
      <img src="https://sunriseattestation.com/wp-content/uploads/2024/01/sunrise-logo.png" alt="logo" />
      </div>
      <div className="menuTrack">
        <h3>Track Status</h3>
      </div>
    </div>
  );
};

export default UpperNav;
