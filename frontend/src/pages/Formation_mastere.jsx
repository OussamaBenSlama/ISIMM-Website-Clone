import React ,{useState} from 'react'
import Navbar from '../components/home/Navbar'
import Header from '../components/formation/Header'
import Mastere from '../components/formation/Mastere'
import Menu from '../components/Menu'

const Formation_mastere = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
       <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Header/>
            <Mastere/>

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Formation_mastere
