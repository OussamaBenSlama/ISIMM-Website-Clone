import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
       <div className='contact-main'>
        <div className='contact-form'>
         <h3>Send us a message</h3>
         <input type='text' placeholder='Name'/>
         <input type='Email' placeholder='Email'/>
         <input type='text' placeholder='Subject'/> <br/>
         <textarea placeholder='Message'/>

         <button>Send Message</button>
        </div>
        <div>
            
        </div>
       </div>
    </div>
  )
}

export default Contact
