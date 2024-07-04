import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterApo = () => {
  return (
    <div className="footerServiceContent">
      <h3>Apostille</h3>
      <ul>
        <li>
          <Link to={"/oman-apostille"}>Oman</Link>
        </li>
        <li>
          <Link to={"/italy-apostille"}>Italy</Link>
        </li>
        <li>
          <Link to={"/germany-apostille"}>Germany</Link>
        </li>
        <li>
          <Link to={"/australia-apostille"}>Australia</Link>
        </li>
        <li>
          <Link to={"/austria-apostille"}>Austria</Link>
        </li>
        <li>
          <Link to={"/france-apostille"}>France</Link>
        </li>
        <li>
          <Link to={"/lithuania-apostille"}>Lithuania</Link>
        </li>
        <li>
          <Link to={"/mexico-apostille"}>Mexico</Link>
        </li>
        <li>
          <Link to={"/netherland-apostille"}>Netherlands</Link>
        </li>
        <li>
          <Link to={"/uk-apostille"}>UK</Link>
        </li>
        <li>
          <Link to={"/usa-apostille"}>USA</Link>
        </li>
        {/* <li>
          <Link to={"/sweden-apostille"}>Sweden</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default FooterApo;
