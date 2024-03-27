import React, { useState } from 'react'
import './AttestationForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const AttestationForm = () => {
    const [addAttestation,setAddAttestation] = useState(false)

    const ajouterAttestation = () => {
        setAddAttestation(true)
    }
    const cancelAttestation = () => {
        setAddAttestation(false)
    }
  return (
    <div className='Attestation'>
       <div className='att_header'>
            <p>Attestation</p>
            <button onClick={ajouterAttestation}>
                <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                Add attestation
            </button>
       </div>
       <div className='att-container'>
            {addAttestation ? 
            (
                <div className='form-add-attestation'>
                <div className='left-form'>
                    <div>
                        <label>Cin <span>*</span></label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Student Id <span>*</span></label>
                        <input type='text' />
                    </div>
                </div>
                <div className='right-form'>
                    <button>Save</button>
                    <button id='cancel' onClick={cancelAttestation}>Cancel</button>
                </div>
            </div>
            ) :
            (
                null
            )}
       </div>
    </div>
  )
}

export default AttestationForm
