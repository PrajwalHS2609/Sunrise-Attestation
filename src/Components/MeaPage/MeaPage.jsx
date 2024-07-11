import React from 'react'
import "./MeaPage.css"
import MeaHead from './MeaHead/MeaHead'
import MeaHeadContent from './MeaHeadContent/MeaHeadContent'
import MeaMain from './MeaMain/MeaMain'
import MeaBlore from './MeaBlore/MeaBlore'
import MeaTime from './MeaTime/MeaTime'
import MeaBloreCert from './MeaBloreCert/MeaBloreCert'
import MeaProcedure from './MeaProcedure/MeaProcedure'
const MeaPage = () => {
  return (
    <div className='meaPageContainer'>
    <MeaHead/>
    <MeaHeadContent/>
    <MeaMain/>
    <MeaBlore/>
    <MeaTime/>
    <MeaBloreCert/>
    <MeaProcedure/>
    </div>
  )
}

export default MeaPage
