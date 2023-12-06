import React from 'react'
import '../styles/formation.css';  
import { useNavigate } from 'react-router-dom';




export default function Formation() {
  const navigate = useNavigate() ;
  const gotoFormation_ing = () => {
    navigate('/formation_ing')
  }
  return (
    <div className='formation'>
        <div >      
              <h2 id='form'>Trouver la bonne formation pour vous</h2>
        </div>
        <div className='dispo'>
            <div>Licence</div>
            <div>Mastere de Recherche</div>
            <div>Mastere Professionnel</div>
            <div onClick={gotoFormation_ing}>Formation d'ingenieurs</div>
            <div>Cycle preparatoire</div>
        </div>
        
        
        
        </div>
  )
}
