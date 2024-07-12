import React from 'react'
import PccHead from './PccHead/PccHead'
import PccHeadContent from './PccHeadContent/PccHeadContent'
import PccImp from './PccImp/PccImp'
import WhatIsPcc from './WhatIsPcc/WhatIsPcc'
import PccProcedure from './PccProcedure/PccProcedure'
import PccChallenge from './PccChallenge/PccChallenge'
import PccOverCome from './PccOverCome/PccOverCome'
import ImpEachStep from './ImpEachStep/ImpEachStep'
import PccUse from './PccUse/PccUse'

const PccPage = () => {
  return (
    <div className='pccPageContainer'>
      <PccHead/>
      <PccHeadContent/>
      <PccImp/>
      <WhatIsPcc/>
      <PccProcedure/>
      <PccChallenge/>
      <PccOverCome/>
      <PccExp/>
      <ImpEachStep/>
      <PccUse/>
    </div>
  )
}

export default PccPage
