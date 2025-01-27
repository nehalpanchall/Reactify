import { useState } from 'react';
import LoginContextObj from './LoginContext';

const LoginContextProvider = ({ children }) => {
  return (
    <>
      <LoginContextObj.Provider value={{ user, setUser }}>
        {children}
      </LoginContextObj.Provider>
    </>
  );
};

export default LoginContextProvider;
