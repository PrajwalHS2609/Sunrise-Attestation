import React from "react";
import "./Marquee.css";
const HomeMarqueeCard = (props) => {
  return (
    <div className="marqueeCard">
      <a href="">
        <img src={props.img} alt={props.alt} />

        <div className="marqueeCover">
          <h3>{props.name}</h3>
        </div>
      </a>
    </div>
  );
};

export default HomeMarqueeCard;
