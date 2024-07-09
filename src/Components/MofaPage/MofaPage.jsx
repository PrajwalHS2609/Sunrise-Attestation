import React from 'react'
import "./MofaPage.css"
import MofaHead from './MofaHead/MofaHead'
import MofaContent from './MofaContent/MofaHeadContent'
import MofaMain from './MofaMain/MofaMain'
import MofaBlore from './MofaBlore/MofaBlore'
import MofaTime from './MofaTime/MofaTime'
const MofaPage = () => {
  return (
    <div className='mofaContainer'>
      <MofaHead/>
      <MofaContent/>
      <MofaMain/>
      <MofaBlore/>
      <MofaTime/>
    </div>
  )
}

export default MofaPage
