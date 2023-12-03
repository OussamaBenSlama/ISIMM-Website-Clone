import React from 'react'
import './styles/WhyIsimm.css'
import isimm from './images/isimm.jpg'
import { FaCheck } from 'react-icons/fa'

const WhyIsimm = () => {
  return (
    <div className='whyisimm_container'>
       <div className='whyisimm_img'>
            <img src={isimm} alt=''/>
       </div>
       <div className='whyisimm_description'>
         <div>
            <h2>Pourquoi choisir l'ISIMM ?</h2>
            <p>l’ISIMM se prévaut de la bonne réputation de ses diplômés. 
                Le score d’orientation à cet établissement est en hausse d’une année à l’autre grâce
                à la détermination des enseignants et à la qualité 
                de ses programmes qui offrent un dosage judicieux de connaissances théoriques et pratiques.
            </p> <br/><br/>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2,auto)',gap:'20px'}}>
                <span>
                    <FaCheck className='span_description'/> Formation diversifiée
                </span>
                <span>
                    <FaCheck className='span_description'/>  Vie associative
                </span>
                <span>
                    <FaCheck className='span_description'/> Recherche scientifique
                </span>
                <span>
                    <FaCheck className='span_description'/> Partenaires stratégiques
                </span>
                <span>
                    <FaCheck className='span_description'/>  Insertion professionnelle
                </span>
                <span>
                    <FaCheck className='span_description'/> Conventions internationales
                </span>
            </div>
         
         
         </div>
       </div>
    </div>
  )
}

export default WhyIsimm
