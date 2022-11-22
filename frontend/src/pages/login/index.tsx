import axios from 'axios';
import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { error, simpleMessage, warnig } from '../../components/Message';
import { MessageContext } from '../../context/messageContext';
import { apiAdress } from '../../services/api';
import { InputText } from '../../styles/components/inputText';
import { LabelText } from '../../styles/components/label';
import { Title } from '../../styles/components/title';
import usePersistedState from '../../util/usePersistedState';
import { PasswordInput } from '../signUp/input/password';

import { Container } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = usePersistedState("username", "")
  const [userToken, setUserToken] = usePersistedState("userToken", "");
  const [isEnable, setIsEnable] = useState(false)
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)
  const navigate = useNavigate();


  async function CheckUsername(event: {[k:string]: FormDataEntryValue}){
    try{
      await axios(`${apiAdress}/username/${event.username}`).then(response => {
        if(response.data.username === null){
          setMessage({ title:"Este usuário não existe!", message:"Tente novamente.", type:error })
          setTime(3)
          setHasMessage(true)
          setIsEnable(false)
          return
        }

        setIsEnable(true)
        setUsername(event.username.toString())
        
        
      })
    }catch (err){
      setMessage({ title:"Erro no login", message:"Não foi possível comunicar com o servidor, tente novamente mais tarde", type:error })
      setTime(3)
      setHasMessage(true)
    }
  }


  async function handleLogin(event: FormEvent){
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(!isEnable){
      await CheckUsername(data)
      return
    }

    await axios.post(`${apiAdress}/auth`, { 
      username : username,
      password: data.password,

    })
    .then(function (response) {
      console.log(response);
      setUserToken(response.data.token)
      setMessage({ title:`Olá ${username}!` , message: "Você já está logado!", type:simpleMessage })
      setTime(4.5)
      setHasMessage(true)
      navigate("/")
    })
    .catch(function (err){
      console.log(err);
      setMessage({ title:`Erro` , message:err.response.data.error , type:error })
      setTime(5)
      setHasMessage(true)
    });
  

  }

  return (
    <Container>
      <Title color="#fff" className='title'> Login: </Title>

      <form onSubmit={handleLogin} className='loginBox'>

        <div className='loginInput'>
          <LabelText htmlFor="username"> Username:</LabelText>
          <InputText required={true} disabled={isEnable} type="text" maxLength={30} minLength={3} name="username" placeholder="@username" />
        </div>
        {isEnable?<PasswordInput label="Sua senha" placeholder="Digite a sua senha." name="password" />:<></>}

        
        <div className='buttonArea'>
          <button className='loginButton'> {isEnable? "Entrar" : "Próximo"} </button>
          {isEnable?<button onClick={() => setIsEnable(false)} className='backButton'> Voltar </button>:<></>}
        </div>
      </form>
    </Container>
  );
}

export default Login;