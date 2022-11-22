import React, { FormEvent, useContext, useState } from 'react';
import axios from 'axios';

import { PasswordInputs } from './input/password';
import { Container } from './styles';
import { apiAdress } from '../../services/api';
import { Title } from '../../styles/components/title';
import { InputText } from '../../styles/components/inputText';
import { error, simpleMessage, warnig } from '../../components/Message';
import { MessageContext } from '../../context/messageContext';
import { LabelText } from '../../styles/components/label';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("username")
  const [isEnable, setIsEnable] = useState(false)
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)

  async function CheckUsername(event: {[k:string]: FormDataEntryValue}){
    try{
      await axios(`${apiAdress}/username/${event.username}`).then(response => {
        if(response.data.username !== null){
          setMessage({ title:"Este usuário já existe!", message:"Tende criar um outro username.", type:warnig })
          setTime(3)
          setHasMessage(true)
          setIsEnable(false)
        }else{
          setIsEnable(true)
        }
        setUsername(event.username.toString())
      })
    }catch (err){
      setMessage({ title:"Erro no cadastro", message:"Não foi possível comunicar com o servidor, tente novamente mais tarde", type:error })
      setTime(3)
      setHasMessage(true)
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
      setMessage({ title:"Erro no cadastro", message:"As senhas não coincidem.", type:error })
      setTime(3)
      setHasMessage(true)
      return
    }

    await axios.post(`${apiAdress}/user`, { 
      username : username,
      password: data.password,
      comfirmPassword:data.comfirmPassword
    })
    .then(function (response) {
      console.log(response);
      setMessage({ title:`Boas notícias ${response.data.username}!` , message: "Sua conta foi criada com sucesso!", type:simpleMessage })
      setTime(4.5)
      setHasMessage(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container>
      <Title color="#fff"> Bem Vindo a NG.CASH! </Title>

      <form onSubmit={handleCreateUser} id='signUpBox'>
        <Title color="#fff"> Cadastro: </Title>

        <span id="inputUsername" className='signUpInput'>
          <LabelText htmlFor="username"> Username:</LabelText>

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