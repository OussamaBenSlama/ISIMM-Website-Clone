import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Actualites from '../components/Actualites/Actualites'
const Main = () => {
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <div style={{width:'100%' ,flexBasis:'80%'}}>
        <Header/>
        <Actualites/>
      </div>
    </div>
  )
}

export default Main
