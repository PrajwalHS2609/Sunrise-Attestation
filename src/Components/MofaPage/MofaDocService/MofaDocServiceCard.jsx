import React from "react";
import "./MofaDocService";

const MofaDocServiceCard = (props) => {
  return (
    <div className="docServCardContainer">
      <h3>
        <span>{props.span}</span> {props.head}
      </h3>
      <p>{props.para}</p>
    </div>
  );
};

export default MofaDocServiceCard;
