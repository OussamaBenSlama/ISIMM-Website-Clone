import React , {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Header from '../components/departement/Header'
import Departement from '../components/departement/departments'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Departements = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
       <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            {/* <Header/> */}
            <Departement/>
            

        </div>
        <Footer/>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Departements
