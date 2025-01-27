import { createContext } from 'react';

const LoginContextObj = createContext({ user: '', setUser: () => {} });

export default LoginContextObj;
