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
          +91 8888888888
        </li>
      </ul>
      <div className="menuTrack">
        <h3>Track Status</h3>
      </div>
    </div>
  );
};

export default UpperNav;
