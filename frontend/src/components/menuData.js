import React from 'react'
import { useNavigate } from 'react-router-dom';

const ISIMM = () => {
  const navigate = useNavigate()

  return (
    <ul>
      <li>Presentation</li>
      <li onClick={()=> {navigate('/departements')}} >Departements</li>
      <li>4C</li>
      <li onClick={()=> {navigate('/bibliotheque')}}>Bibliothéque</li>
    </ul>
  )
}
const VieEtudiant = () => {
  const navigate = useNavigate()

  return (
    <ul>
      <li onClick={()=> {navigate('/foyers')}} >Foyers</li>
      <li>Restaurants universitaires</li>
    </ul>
  )
}
const VieAssociative = () => {
  return (
    <ul>
      <li>Associations</li>
      <li>Clubs</li>
      <li>Evénéments</li>
    </ul>
  )
}
const International = () => {
  return (
    <ul>
      <li>Offre de mobilité</li>
      <li>Parteneriat international</li>
    </ul>
  )
}
export {ISIMM,VieEtudiant,VieAssociative,International}