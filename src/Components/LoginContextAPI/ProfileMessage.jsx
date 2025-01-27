import { useTodo } from './context/LoginContext';

const ProfileMessage = () => {
  let { user } = useTodo();

  if (!user) return <h1>Please Login First</h1>;

  return <h1>Welcome {user}</h1>;
};

export default ProfileMessage;
