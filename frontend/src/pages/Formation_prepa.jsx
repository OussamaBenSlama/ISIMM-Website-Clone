import React , {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Header from '../components/formation/Header'
import Prepa from '../components/formation/Prepa'
import Menu from '../components/Menu'

const Formation_prepa = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
       <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Header/>
            <Prepa/>

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Formation_prepa
