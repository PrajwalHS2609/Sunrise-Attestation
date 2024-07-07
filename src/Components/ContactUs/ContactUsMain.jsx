import React from "react";
import "./ContactUs.css";
import ContactUsCard from "./ContactUsCard";
import bangalore from "./../../vid&img/ContactUs/bangaloreContact.png";
import delhi from "./../../vid&img/ContactUs/delhiContact.png";
import mumbai from "./../../vid&img/ContactUs/mumbaiContact.png";
import oman from "./../../vid&img/ContactUs/omanContact.png";
import uae from "./../../vid&img/ContactUs/uaeContact.png";
import chennai from "./../../vid&img/ContactUs/chennaiContact.png";

const ContactUsMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent">
        <div className="contactUsCover">
          <ContactUsCard
            img={bangalore}
            alt="bangalore"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
          <ContactUsCard
            img={delhi}
            alt="delhi"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
          <ContactUsCard
            img={mumbai}
            alt="mumbai"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
          <ContactUsCard
            img={oman}
            alt="oman"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
          <ContactUsCard
            img={uae}
            alt="uae"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
          <ContactUsCard
            img={chennai}
            alt="chennai"
            address=""
            emailLink=""
            email=""
            phoneLink=""
            phoneNo=""
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="contactUs"
        />
      </div>
      <div className="contactMainContent"></div>
    </div>
  );
};

export default ContactUsMain;
