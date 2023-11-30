// App.js
import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chiffre from './components/Chiffre';
import Nouveaute from './components/Nouveaute';
import Formation from './components/Formation';
import Partenaire from './components/Partenaire';
import Location from './components/location';
 

 
const App = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
 

  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>

      <div className={`home-content ${isMenuVisible ? 'blurred' : ''}`}>
        {/* The rest of your home page content goes here */}
        <Home />
        <Nouveaute />
        <About/>
        <Chiffre />
        <Formation />
         <Partenaire/>
        <Location />
 
      </div>

      {isMenuVisible && <div className={`menu-content show`}><Menu onClose={toggleMenu} /></div>}

       
    </div>
  );
};

export default App;
