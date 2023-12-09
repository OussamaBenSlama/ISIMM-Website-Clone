import React , {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Header from '../components/bibliotheque/Header'
import Bibliotheque from '../components/bibliotheque/Bibliotheque'
import Menu from '../components/Menu'

const Biblio = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
       <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Header/>
            <Bibliotheque/>

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Biblio
