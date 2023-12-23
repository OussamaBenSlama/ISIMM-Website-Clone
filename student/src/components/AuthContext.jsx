import { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform your login logic here, set isAuthenticated to true if successful
    // For now, we'll just set it to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform your logout logic here, set isAuthenticated to false
    // For now, we'll just set it to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
