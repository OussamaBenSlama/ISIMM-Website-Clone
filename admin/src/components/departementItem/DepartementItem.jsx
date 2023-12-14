import React from 'react';
import './DepartementItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faFileCode ,faMicrochip ,faSquareRootVariable} from '@fortawesome/free-solid-svg-icons';
import Delete from '../buttons/Delete';
import Edit from '../buttons/Edit';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const DepartementItem = ({ item, index, onDelete }) => {
  const deleteDepartement = async () => {
    const userConfirmed = window.confirm('Are you sure you want to delete this item?');

    if (userConfirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/departments/${item.id}/`);
        onDelete();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    } else {
      console.log('Deletion canceled by the user');
    }
  };
  const navigate = useNavigate()
  const goEditDepartement = ()=> {
    navigate(`/departement/editdepartement/${item.id}`);
    }
    
  let icon;

   if (item.name === 'Mathematique') {
    icon=faSquareRootVariable
   } else if (item.name === 'Technologie') {
    icon=faMicrochip
   } else if (item.name === 'Informatique') {
    icon = faFileCode;
  } else {
     icon = null;
  }

  return (
    <div className='DepartementItem'  >
      <div className='DepartementItemHeader'>
        {icon && <FontAwesomeIcon icon={icon} className='Departement-card' />}
        <div>{item?.name}</div>
      </div>
      <br />
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: 'rgb(230,230,230)',
          borderRadius: '15px',
          minWidth: '7rem',
          textAlign: 'center',
          maxWidth: '13rem',
        }}
      >
        {item?.leader_of_department}
      </div>
      <br />
      <br />
      <div className='DepartementItembtn'>
        <div onClick={deleteDepartement}>
          <Delete />
        </div>
        <div onClick={goEditDepartement}>
        <Edit />
        </div>
        
      </div>
    </div>
  );
};

export default DepartementItem;
