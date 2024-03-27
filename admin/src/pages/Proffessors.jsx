import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Add from '../components/buttons/Add'
import { useNavigate } from 'react-router-dom'
import ProfList from '../components/Profs/ProfList'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Proffessors = () => {
  const navigate = useNavigate()

  const gotoAddStudent = () => {
    navigate('/addenseignants')
  }
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <div style={{width:'100%' ,flexBasis:'80%'}}>
        <Header/>
          <div className='att_header'>
              <p>Proffessors</p>
              <button onClick={gotoAddStudent}>
                  <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                  Add prof
              </button>
        </div>
            <ProfList/>
      </div>
    </div>
  )
}

export default Proffessors;