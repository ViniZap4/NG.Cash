import React from 'react';

import { Container } from './styles';

const login: React.FC = () => {

  function handleLogin(){

  }

  return (
    <Container>
     <form onSubmit={handleLogin} id='signUpBox'>
        <h1 className='title'> Login: </h1>

        <span id="inputUsername" className='signUpInput'>
          <label htmlFor="username"> Username:</label>
          <input required={true} type="text" maxLength={30} minLength={3} name="username" placeholder="@username" />
        </span>


      </form>
    </Container>
  );
}

export default login;