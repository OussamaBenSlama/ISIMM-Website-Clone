import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Add from '../components/buttons/Add'
import { useNavigate } from 'react-router-dom'
import StudentList from '../components/Students/StudentList'
import SpecialityList from '../components/Students/SpecialityList'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Students = () => {
  const navigate = useNavigate()

  const gotoAddStudent = () => {
    navigate('/addstudent')
  }
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <div style={{width:'100%' ,flexBasis:'80%'}}>
        <Header/>
        <div className='att_header'>
            <p>Students</p>
            <button onClick={gotoAddStudent}>
                <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                Add student
            </button>
       </div>
            <SpecialityList/>
            
      </div>
    </div>
  )
}

export default Students