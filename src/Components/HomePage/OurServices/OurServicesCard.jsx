import React from "react";
import "./OurServices.css";

const OurServicesCard = (props) => {
  return (
      <div className="ourServicesCardContainer">
        <a href="/">
          <div className="ourServicesCardImg">
            <img src={props.img} alt="" />
          </div>
          <div className="ourServicesCardHead">
            <h4>{props.head}</h4>
          </div>
          <div className="ourServicesCardPara">
            <p>{props.para}</p>
          </div>
        </a>
    </div>
  );
};

export default OurServicesCard;
