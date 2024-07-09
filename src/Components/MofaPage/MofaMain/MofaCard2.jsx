import React, { useEffect } from "react";
import "./MofaMain.css";
import "aos/dist/aos.css";
import AOS from "aos";
const MofaCard2 = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="mofaCardContainer" id="mofaCard2Container" data-aos="fade-left">
      <div className="mofaCardContent" id="mofaCardContent1">
        <div className="mofaCardImg">
          <img src={props.img} alt={props.alt} />
        </div>
      </div>
      <div className="mofaCardContent" id="mofaCardContent2">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default MofaCard2;
