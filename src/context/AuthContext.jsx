// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem('authToken');
      const userEmail = localStorage.getItem('userEmail');
      const userName = localStorage.getItem('userName');

      if (token && userEmail) {
        setUser({
          email: userEmail,
          name: userName || userEmail.split('@')[0],
          token: token
        });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (email, name, token) => {
    // Store in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);

    // Update state
    setUser({ email, name, token });
    setIsAuthenticated(true);
  };

  const signup = (email, name, token) => {
    // Same as login for now
    login(email, name, token);
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    // Update state
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));

    // Update localStorage
    if (updates.name) localStorage.setItem('userName', updates.name);
    if (updates.email) localStorage.setItem('userEmail', updates.email);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    updateUser,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
