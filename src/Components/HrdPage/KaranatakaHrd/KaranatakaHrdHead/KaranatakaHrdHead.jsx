import React from 'react'
import karanatakaHrd from "./../../../../vid&img/Hrd/KarnatakaHrd.png";
import "./KaranatakaHrdHead.css"
const KaranatakaHrdHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Karnataka by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={karanatakaHrd} alt="karanatakaHrd" />
  </div>
  )
}

export default KaranatakaHrdHead
