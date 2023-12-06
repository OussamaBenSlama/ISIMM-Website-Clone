// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Formation_ing from './pages/Formation_ing'
import Formation_mastere from './pages/Formation_mastere'
import Formation_liscence from './pages/Formation_liscence'
import Formation_prepa from './pages/Formation_prepa'
import Actualites from './pages/Actualites'
 

 
const App = () => {
  
 

  return (
    <Router>
        <div className="App">
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/formation_ing' element={<Formation_ing/>}/>
             <Route path='/formation_mastere' element={<Formation_mastere/>}/>
             <Route path='/formation_liscence' element={<Formation_liscence/>}/>
             <Route path='/formation_prepa' element={<Formation_prepa/>}/>
             <Route path='/actualites' element={<Actualites/>}/>
           </Routes>
        </div>
    </Router>
  );
};

export default App;
