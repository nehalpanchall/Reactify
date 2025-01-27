import { useState } from 'react';
import { LoginProvider } from './LoginContextAPI/context/LoginContext';
import Login from './LoginContextAPI/Login';
import ProfileMessage from './LoginContextAPI/ProfileMessage';

const ContextAPI = () => {
  const [user, setUser] = useState(null);
  return (
    <LoginProvider value={{ user, setUser }}>
      <h1>Login Panel with Profile Message</h1>
      <Login />
      <ProfileMessage />
    </LoginProvider>
  );
};

export default ContextAPI;
