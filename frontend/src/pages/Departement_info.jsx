import React , {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Header from '../components/departement/Header_info'
import Departement from '../components/departement/departement_info'
import Menu from '../components/Menu'

const Departement_info = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
       <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Header/>
            <Departement/>

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Departement_info
