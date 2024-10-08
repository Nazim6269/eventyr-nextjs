'use client';

const { useState } = require('react');
const { AuthContext } = require('../contexts');

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
