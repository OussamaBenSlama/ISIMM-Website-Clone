import React from 'react'
import './Edit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Edit = () => {
  return (
    <div className='Edit'>
    <FontAwesomeIcon icon={faEdit} style={{marginRight:'5px'}}/>
    Edit</div>
  )
}

export default Edit