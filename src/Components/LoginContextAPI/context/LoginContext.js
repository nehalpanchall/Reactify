import { createContext, useContext } from 'react';

const LoginContextObj = createContext({
  user: 'Default Value',
  setUser: () => {}
});

// provider single provider
const LoginProvider = LoginContextObj.Provider;

// Custom hook: avoid importing useContect and LoginContextObj
const useTodo = () => useContext(LoginContextObj);

export { LoginProvider, useTodo };
