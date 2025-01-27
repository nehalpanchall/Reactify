import { useContext } from 'react';
import LoginContextObj from './context/LoginContext';

const ProfileMessage = () => {
  let { user } = useContext(LoginContextObj);

  if (!user) return <h1>Please Login First</h1>;

  return <h1>Welcome {user}</h1>;
};

export default ProfileMessage;
