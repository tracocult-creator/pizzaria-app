import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Criar o Contexto de Autenticação
export const AuthContext = createContext(null);

// 2. Criar o Provider de Autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  // Efeito para carregar o usuário/token do localStorage na inicialização
  useEffect(() => {
    if (token) {
      // Em um cenário real, você decodificaria o JWT ou faria uma requisição para validar o token
      // Por simplicidade, vamos apenas simular um usuário
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

// 3. Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
