import React, { createContext, useState, useContext, useEffect } from 'react';

 
export const AuthContext = createContext(null);
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

   
  useEffect(() => {
    if (token) {
    
      setUser({ name: 'Usuário Teste', email: 'teste@pizzaria.com' });
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
    setUser({ name: 'Usuário Teste', email: 'teste@pizzaria.com' });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

 
export const useAuth = () => {
  return useContext(AuthContext);
};
