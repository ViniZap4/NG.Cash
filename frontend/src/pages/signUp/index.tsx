import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { PasswordInputs } from './input/password';
import { Container } from './styles';
import { apiAdress } from '../../services/api';
import { Title } from '../../styles/components/title';
import { InputText } from '../../styles/components/inputText';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("@username")
 
  const [isEnable, setIsEnable] = useState(false)

  async function CheckUsername(event: {[k:string]: FormDataEntryValue}){
    try{
      await axios(`${apiAdress}/username/${event.username}`).then(response => {
        setIsEnable(response.data.username === null? true: false)
        if(response.data.username !== null){alert("usuário já existe")}
        setUsername(event.username.toString())
      })
    }catch (err){
      console.log("can't communicate with server")
    }
  }

  async function handleCreateUser(event: FormEvent){
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    if(!isEnable){
      await CheckUsername(data)
      return
    }

    if(data.password !== data.comfirmPassword){
      alert("passwords don't match")
      return
    }

    await axios.post(`${apiAdress}/user`, {       
      username : username,
      password: data.password,
      comfirmPassword:data.comfirmPassword
    })
    .then(function (response) {
      console.log(response);

      alert("usuário criado com sucesso!")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container>
      <Title> Bem Vindo a NG.CASH! </Title>
      <form onSubmit={handleCreateUser} id='signUpBox'>
        <Title> Cadastro: </Title>

        <span id="inputUsername" className='signUpInput'>
          <label htmlFor="username"> Username:</label>
          <InputText required={true} disabled={isEnable} type="text" maxLength={30} minLength={3} name="username" placeholder="@username" />
        </span>

        {isEnable? <PasswordInputs />:<></>}

        <div className='buttonArea'>
          <button className='signUpButton'> Próximo </button>
          {isEnable?<button onClick={() => setIsEnable(false)} className='backButton'> Voltar </button>:<></>}
        </div>
      </form>
    </Container>
  )
}

export default SignUp;