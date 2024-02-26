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
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgb(248,249,250)'}} className={`home-content ${isMenuVisible ? 'blurred' : ''}` }>
            <div style={{width:'60%',paddingTop:'50px'}}>
              <h3 style={{ color:'#003366', fontSize:'40px' ,marginBottom:'30px'}}>Informations Générales :</h3>
              <p style={{lineHeight:'2'}}>
                <b>
                L'Institut Supérieur d'Informatique et de Mathématiques de l’Université de Monastir (ISIMM) </b>
                est créé par le décret n° 1623 du 09 juillet 2002, est un établissement d’enseignement supérieur scientifique, public, placé sous la tutelle du Ministère de l'Enseignement Supérieur de la Recherche Scientifique.
              </p>
              
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
