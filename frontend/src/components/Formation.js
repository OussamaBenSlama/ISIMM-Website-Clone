import React from 'react'
import '../styles/formation.css';  
import { useNavigate } from 'react-router-dom';




export default function Formation() {
  const navigate = useNavigate() ;
  const gotoFormation_ing = () => {
    navigate('/formation_ing')
  }
  const gotoFormation_mastere = () => {
    navigate('/formation_mastere')
  }
  const gotoFormation_liscence = () => {
    navigate('/formation_liscence')
  }
  const gotoFormation_prepa = () => {
    navigate('/formation_prepa')
  }
  return (
    <div className='formation'>
        <div >      
              <h2 id='form'>Trouver la bonne formation pour vous</h2>
        </div>
        <div className='dispo'>
            <div onClick={gotoFormation_liscence}>Licence</div>
            <div onClick={gotoFormation_mastere}>Mastere</div>
            <div onClick={gotoFormation_ing}>Formation d'ingenieurs</div>
            <div onClick={gotoFormation_prepa}>Cycle preparatoire</div>
        </div>
        
        
        
        </div>
  )
}
