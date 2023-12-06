// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Formation_ing from './pages/Formation_ing'
 

 
const App = () => {
  
 

  return (
    <Router>
        <div className="App">
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/formation_ing' element={<Formation_ing/>}/>
           </Routes>
        </div>
    </Router>
  );
};

export default App;
