import React from 'react'
import "./UaeCertificate.css"
import UaeCertificateHead from './UaeCertificateHead'
import UaeCertificateMain from './UaeCertificateMain'
const UaeCertificate = () => {
  return (
    <div className='uaeCertContainer'>
      <UaeCertificateHead/>
      <UaeCertificateMain />
    </div>
  )
}

export default UaeCertificate
