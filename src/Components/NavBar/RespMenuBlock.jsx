import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const RespMenuBlock = ( { items,menuName,link }) => {
  let [drop, setDrop] = useState(false);
  let dropRef = useRef();

  //   let showSideBar = () => {
  //     const sideBar = document.querySelector(".respMenu");
  //     sideBar.style.display = "flex";
  //     sideBar.style.transform = "translateX(0px)";
  //   };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(350px)";
  };
  let handleDropDown = (e) => {
    e.preventDefault();
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
      <ul className="serviceDrop">
        <h1>
          <Link onClick={hideSideBar} to={"/"}>
            {menuName}
          </Link>
          <FontAwesomeIcon
            onClick={handleDropDown}
            icon={faSortDown}
            className="respDropIcon"
          ></FontAwesomeIcon>
        </h1>
        <span className="respMenuSpan" id="respDrop1" ref={dropRef}>
          {items.map((item) => {
            return (
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={link}>
                    {item}
                  </Link>
                </h2>
              </li>
            );
          })}
        </span>
      </ul>
    </>
  );
};

export default RespMenuBlock;
