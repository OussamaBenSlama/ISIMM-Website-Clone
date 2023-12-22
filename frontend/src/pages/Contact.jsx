
import React , {useState} from 'react'
import '../styles/Contact.css'
import Navbar from '../components/home/Navbar'
import Menu from '../components/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope ,faLocation } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const myemail = "hello@eventii.tn"

  const handleSendEmail = () => {
    const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${myemail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
  };
  return (
    <div>
      <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
      <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
        
        <div className='contact'>
            <div className='container'>
                <div className='left-bar'>
                    <div>
                        <FontAwesomeIcon icon={faLocation} size="2x" color='#050a30' />
                        <p>Adresse</p> 
                        <a>
                            Av. de la Corniche, Monastir 5000
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color='#050a30'/>
                        <p>Email</p> 
                        <a href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(myemail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                            style={{fontSize:'1rem'}}>
                            contact@isimm.rnu.tn
                        </a>

                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="2x" color='#050a30'/>
                        <p>Phone</p> 
                        <a href="tel:+21628281153">
                            +216 73 326 326
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color='#050a30' />
                        <p>LinkedIn</p> 
                        <a href="https://www.linkedin.com/in/oussama-ben-slama/" target="_blank" rel="noopener noreferrer">
                            Higher Institute of Informatics and Mathematics of Monastir
                        </a>
                    </div>
                </div>
                <div id='line' style={{width:'2px', height:'85%',backgroundColor:'#061e6e'}}></div>
                <div className='right-bar'>
                    <h2>Send us a message</h2>
                    <p>For any support, collaboration, or partnership, 
                        please do not hesitate to send me a message using the form below.
                    </p>
                    <input type='email' placeholder='Enter your email'/>
                    <input type="text" placeholder='Enter your subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}/>

                    <textarea name="" id="" cols="15" rows="10" placeholder='Enter your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>

                    <button onClick={handleSendEmail}>Send Now</button>
                </div>
            </div>
        </div>
      </div>
      {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}

    </div>
  )
}

export default Contact
