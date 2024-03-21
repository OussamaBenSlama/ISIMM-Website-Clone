import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Emploi from './pages/Emploi'
import Login from './pages/Login';
import Attestation from './pages/Attestation'
import { useAuth } from './components/AuthContext'; 
import { UserProvider } from './components/global/User';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <UserProvider> {/* Move UserProvider outside of the Routes */}
        <Routes>
          {isAuthenticated === false ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/emploi" element={<Emploi />} />
              <Route path="/attestation" element={<Attestation />} />
            </>
          )}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
