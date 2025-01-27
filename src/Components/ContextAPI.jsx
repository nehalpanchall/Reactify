import LoginContextProvider from './LoginContextAPI/context/LoginContextProvider';
import Login from './LoginContextAPI/Login';
import ProfileMessage from './LoginContextAPI/ProfileMessage';

const ContextAPI = () => {
  return (
    <LoginContextProvider>
      <h1>Login Panel with Profile Message</h1>
      <Login />
      <ProfileMessage />
    </LoginContextProvider>
  );
};

export default ContextAPI;
