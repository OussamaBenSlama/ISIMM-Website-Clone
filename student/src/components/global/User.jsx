import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the Context
const UserContext = createContext();

// Step 2: Create a Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserContext = (obj) => {
    setUser(obj);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Custom Hook to Access the Context
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
