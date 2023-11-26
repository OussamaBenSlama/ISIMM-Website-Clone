import React from 'react'
import './Add.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const Add = () => {
  return (
    <div className='Add'>
    <FontAwesomeIcon icon={faPlus} style={{marginRight:'5px'}}/>
    Add New</div>
  )
}

export default Add