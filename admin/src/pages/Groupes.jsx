import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import GroupesList from '../components/groupes/GroupesList'

const Groupes = () => {
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <GroupesList/>
        </div>
      </div>
  )
}

export default Groupes