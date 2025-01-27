import { useRef, useState } from 'react';
import { useTodo } from './context/LoginContext';

const Login = () => {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  let userRef = useRef(null);

  const contextObj = useTodo();

  const loginCLick = e => {
    e.preventDefault();
    contextObj.setUser(userName);

    setUserName('');
    setPassword('');

    userRef.current.focus();
  };

  return (
    <>
      <input
        type="text"
        ref={userRef}
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        style={{
          border: '1px solid black',
          padding: '2px 10px',
          margin: '10px'
        }}
        onClick={loginCLick}
      >
        Login
      </button>
    </>
  );
};

export default Login;
