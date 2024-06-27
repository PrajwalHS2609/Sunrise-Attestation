import React from "react";
import "./HomeFlags.css";
const HomeFlagCard = (props) => {
  return (
    <div className="homeFlagCardContainer">
      <img
        src={props.flag}
        alt={props.alt}
      />
      <div className="homeFlagCardCover"></div>
      <div className="homeFlagCardName"><h3>{props.name}</h3></div>
    </div>
  );
};

export default HomeFlagCard;
