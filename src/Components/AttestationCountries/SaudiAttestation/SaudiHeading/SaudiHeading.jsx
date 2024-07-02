import React from 'react'
import TypeWriter from '../SaudiTypeWriter/TypeWriter'
import uaeAttBanner from "./../../../../vid&img/UAE Attestation.mp4";

const SaudiHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
    <TypeWriter />
    <video src={uaeAttBanner} autoPlay loop muted />
  </div>
  )
}

export default SaudiHeading
