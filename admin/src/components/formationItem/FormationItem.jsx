import React from 'react'
import './FormationItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Delete from '../buttons/Delete'
import Edit from '../buttons/Edit'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const FormationItem = ({item,index,onDelete}) => {
    const getCategoryColor = (category) => {
        switch (category) {
          // case 'Ingenieurie':
          //   return 'black'; 
          // case 'Mastere':
          //   return 'black';  
          // case 'Liscence':
          //   return 'black'; 
          // case 'Cycle préparatoire integré':
          //   return 'black'; 
          default:
            return 'black'; 
        }
      };
      const deleteFormation = async () => {
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
      const navigate = useNavigate()
  const goEditFormation = ()=> {
    navigate(`/formation/editformation/${item.id}`);
    }
    
  return (
    <div className='FormationItem'>
        <div className='FormationItemHeader'>
            <FontAwesomeIcon icon={faGraduationCap} className='formation-card' color={getCategoryColor(item.category)}/>
            <div>
               < >{item?.title}</> 
            </div> 
        </div> <br/>
        <div style={{     minWidth:'7rem'  }}>
        Id_formation : {item?.id}
        </div>
        <div style={{     minWidth:'7rem'  }}>
        Categorie : {item?.category}
        </div> <br/><br/>
        <div className='FormationItembtn'>
            <div onClick={deleteFormation}><Delete/></div>
            <div onClick={goEditFormation}><Edit/></div>
        </div>
    </div>
  )
}

export default FormationItem