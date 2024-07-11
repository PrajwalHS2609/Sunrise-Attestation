import React from 'react'
import "./MeaHead.css"
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";

const MeaHead = () => {
  return (
    <div className='meaHeadContainer'>
      <div className="meaHeadCover">
          <h2>
            MEA <span>Attestation</span> Services In Bengaluru
          </h2>
        </div>
        <img src={mofaBanner} alt="mofaBanner" />
    </div>
  )
}

export default MeaHead
