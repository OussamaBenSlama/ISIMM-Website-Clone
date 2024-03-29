import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import GroupesList from '../components/groupes/GroupesList'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Groupes = () => {
  // show group form 
  const [addGrp, setAddGrp] = useState(false);
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <div className='att_header'>
            <p>Groupes</p>
            <button onClick={()=> {setAddGrp(!addGrp)}}>
                <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                Add Groupe
            </button>
       </div>
          <GroupesList addGrp={addGrp} setAddGrp={setAddGrp}/>
        </div>
      </div>
  )
}

export default Groupes