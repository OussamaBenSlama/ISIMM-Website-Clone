import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ActualitesForm from '../components/Actualites/ActualitesForm'


const AddActualites = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <ActualitesForm/>
        </div>
      </div>
    </div>
  )
}

export default AddActualites