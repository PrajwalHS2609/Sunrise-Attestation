import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterApo = () => {
  return (
    <div className="footerServiceContent">
      <h3>Apostille</h3>
      <ul>
        <li>
          <Link to={"/"}>Oman</Link>
        </li>
        <li>
          <Link to={"/"}>Italy</Link>
        </li>
        <li>
          <Link to={"/"}>Germany</Link>
        </li>
        <li>
          <Link to={"/"}>Australia</Link>
        </li>
        <li>
          <Link to={"/"}>Austria</Link>
        </li>
        <li>
          <Link to={"/"}>France</Link>
        </li>
        <li>
          <Link to={"/"}>Lithuania</Link>
        </li>
        <li>
          <Link to={"/"}>Mexico</Link>
        </li>
        <li>
          <Link to={"/"}>Netherlands</Link>
        </li>
        <li>
          <Link to={"/"}>UK</Link>
        </li>
        <li>
          <Link to={"/"}>USA</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterApo;
