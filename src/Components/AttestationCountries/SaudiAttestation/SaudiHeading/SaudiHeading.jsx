import React from 'react'
import TypeWriter from '../SaudiTypeWriter/TypeWriter'
import saudiAttBanner from "./../../../../vid&img/bannerVids/Saudi Arabia.mp4";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css"
const SaudiHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
    <TypeWriter />
    <video src={saudiAttBanner} autoPlay loop muted />
  </div>
  )
}

export default SaudiHeading
