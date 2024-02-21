import React , {useState} from 'react'
import Header from '../components/presentation/Header'
import Navbar from '../components/home/Navbar'
import Menu from '../components/Menu';
import Presentation from '../components/presentation/Presentation'
import Footer from '../components/Footer'

const PresentationPage = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
        <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.05)'}} className={`home-content ${isMenuVisible ? 'blurred' : ''}` }>
            <div style={{width:'60%',paddingTop:'50px'}}>
              <h3 style={{paddingLeft:'8px', color:'#003366', fontSize:'40px' ,marginBottom:'30px'}}>Informations Générales :</h3>
              <Header/>
              <Presentation/>
            </div>


        </div>
        <Footer/>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
      
    </div>
  )
}

export default PresentationPage
