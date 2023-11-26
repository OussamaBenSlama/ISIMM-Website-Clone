import React from 'react'
import './FormationItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Delete from '../buttons/Delete'
import Edit from '../buttons/Edit'
import axios from 'axios';

const FormationItem = ({item,index,onDelete}) => {
    const getCategoryColor = (category) => {
        switch (category) {
          case 'Ingenieurie':
            return 'purple'; 
          case 'Mastere de recherche':
            return 'blue'; 
          case 'Mastere professionelle':
            return 'green'; 
          case 'Liscence':
            return 'orange'; 
          case 'Cycle préparatoire integré':
            return 'yellow'; 
          default:
            return 'black'; 
        }
      };
      const deleteFormation = async () => {
        // Display a confirmation alert
        const userConfirmed = window.confirm('Are you sure you want to delete this item?');
      
        if (userConfirmed) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/formation/${item.id}/`);
            onDelete(); // Trigger a callback to update the UI or state after successful deletion
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        } else {
          // User clicked "Cancel" or closed the alert
          console.log('Deletion canceled by the user');
        }
      };
      
    
  return (
    <div className='FormationItem'>
        <div className='FormationItemHeader'>
            <FontAwesomeIcon icon={faGraduationCap} className='formation-card' color={getCategoryColor(item.category)}/>
            <div>
                {item?.title} 
            </div> 
        </div> <br/>
        <div style={{padding:'0.5rem', backgroundColor:'rgb(230,230,230)' , borderRadius:'15px' , minWidth:'7rem', textAlign:'center',maxWidth:'13rem'}}>
        {item?.category}
        </div> <br/><br/>
        <div className='FormationItembtn'>
            <div onClick={deleteFormation}><Delete/></div>
            <Edit/>
        </div>
    </div>
  )
}

export default FormationItem