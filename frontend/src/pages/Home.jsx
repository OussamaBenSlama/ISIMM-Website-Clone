import React , {useState} from 'react'
import Navbar from '../components/home/Navbar'
import Section from '../components/Section'
import Nouveaute from '../components/Nouveaute'
import WhyIsimm from '../components/home/WhyIsimm'
import Chiffre from '../components/Chiffre'
import Formation from '../components/Formation'
import Partenaire from '../components/Partenaire'
import Location from '../components/location'
import Menu from '../components/Menu'
const Home = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  return (
    <div>
        <Navbar setMenuVisibility = {setMenuVisibility} isMenuVisible = {isMenuVisible}/>

        <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
            <Section/>
            <Nouveaute />
            <WhyIsimm/>
            <Chiffre />
            <Formation />
            <Partenaire/>
            <Location />

        </div>
        {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}
    </div>
  )
}

export default Home
