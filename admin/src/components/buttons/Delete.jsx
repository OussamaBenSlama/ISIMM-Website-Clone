import React from 'react'
import './Delete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Delete = () => {
  return (
    <div className='Delete'>
    <FontAwesomeIcon icon={faTrash} style={{marginRight:'5px'}}/>
    Delete</div>
  )
}

export default Delete