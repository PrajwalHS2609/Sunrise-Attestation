import React from 'react'
import TypeWriter from '../ChinaTypeWriter/TypeWriter'
import saudiAttBanner from "./../../../../vid&img/bannerVids/Saudi Arabia.mp4";

const ChinaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
    <TypeWriter />
    <video src={saudiAttBanner} autoPlay loop muted />
  </div>
  )
}

export default ChinaHeading
