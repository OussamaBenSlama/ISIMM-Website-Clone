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
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgb(248,249,250)'}} className={`home-content ${isMenuVisible ? 'blurred' : ''}` }>
            <div style={{width:'60%',paddingTop:'50px'}}>
              <h3 style={{ color:'#003366', fontSize:'40px' ,marginBottom:'30px'}}>Inscription bibliothèque :</h3>
              <p style={{lineHeight:'2'}}>
                Afin de bénéficier des services de prêt des ouvrages, les usagers sont priés de s’inscrire à la bibliothèque dans le portail des bibliothèques universitaires « BIRUNI ».
              </p>
              
              <Header/>
              <Bibliotheque/>
            </div>


        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Biblio
