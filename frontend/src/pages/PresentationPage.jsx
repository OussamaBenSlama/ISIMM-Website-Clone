import React , {useState} from 'react'
import Header from '../components/presentation/Header'
import Navbar from '../components/home/Navbar'
import Menu from '../components/Menu';
import Presentation from '../components/presentation/Presentation'

const PresentationPage = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
        <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Header/>
            <Presentation/>

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
      
    </div>
  )
}

export default PresentationPage
