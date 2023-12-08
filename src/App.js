import React, { useState } from 'react';
import axios from 'axios';
import Address from './components/address';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const childOnChange = (event) => {
    console.log('IAM CALLING')
    setState(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here (e.g., send credentials to a server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form after submission
    axios.get('https://demo3579073.mockable.io/test').then(res => {
      console.log(res)
      setUsername('');
      setPassword('');
    }).catch(err => {
      console.error(err)
    })
    
  };

  return (
    <div>
 <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          data-testid='username'
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          data-testid='password'
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button data-testid='submitbtn' type="submit">Login</button>
      </div>
    </form>

    <Address state={state} setState={childOnChange}/>
    </div>
   
  );
};

export default LoginForm;
