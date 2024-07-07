import React from "react";
import "./ContactUs.css";
const ContactUsCard = (props) => {
  return (
    <div className="contactUsCardContainer">
      <div className="contactUsCardImg">
        <img
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="contactUsCardAdd">
        <p>{props.address}</p>
      </div>
      <div className="contactUsCardEmail">
        <p>
          <span>Email: </span>
          <a href="mailto: info@goodwayattestaion.com">
            info@goodwayattestaion.com
          </a>
        </p>
      </div>
      <div className="contactUsCardPhone">
        <p>
          <span>Mobile: </span>
          <a href="tel:9148889666">+91 9148889666</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUsCard;
