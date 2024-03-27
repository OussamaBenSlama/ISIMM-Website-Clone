import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import GroupesList from '../components/groupes/GroupesList'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Groupes = () => {
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <div className='att_header'>
            <p>Groupes</p>
            <button >
                <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                Add Groupe
            </button>
       </div>
          <GroupesList/>
        </div>
      </div>
  )
}

export default Groupes