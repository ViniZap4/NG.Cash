import axios from 'axios';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { error, simpleMessage, warnig } from '../../components/Message';
import { MessageContext } from '../../context/messageContext';
import { apiAdress } from '../../services/api';
import { InputText } from '../../styles/components/inputText';
import { LabelText } from '../../styles/components/label';
import { Title } from '../../styles/components/title';
import { PasswordInput } from '../signUp/input/password';
import { useCookies } from "react-cookie";
import { Container } from './styles';


const Login: React.FC = () => {
  
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [cookie ,setCookie] = useCookies()
  const [username, setUsername] = useState(!cookie.userLogin? "" : cookie.userLogin )
  const [isEnable, setIsEnable] = useState(!cookie.isEnableLogin? false : cookie.isEnableLogin)
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)
  const [signUpButton, setSignUpButton] = useState(false)

  const navigate = useNavigate();

  useEffect(()=>{
    if(username===""){
      setIsEnable("false")
    }
  },[])
  async function CheckUsername(event: {[k:string]: FormDataEntryValue}){
    try{
      await axios(`${apiAdress}/username/${event.username}`).then(response => {
        if(response.data.username === null){
          setMessage({ title:"Este usuário não existe!", message:"Tente novamente.", type:error })
          setTime(3)
          setHasMessage(true)
          setIsEnable(false)
          setSignUpButton(true)
          setCookie("MessageContext", true)
          setCookie("userSignUp",event.username.toString());
          setCookie("isEnableSignUp",true);
          return
        }
        setIsEnable(true)
        setUsername(event.username.toString())
        setCookie("username",event.username.toString());

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
    if(data.username === undefined){
      data.username = username
    }
    await axios.post(`${apiAdress}/auth`, { 
      username : data.username,
      password: data.password,

    })
    .then(function (response) {
      console.log(response);
      setCookie("userToken",response.data.token, {expires: tomorrow});
      setCookie("userID",response.data.id, {expires: tomorrow});
      setMessage({ title:`Olá ${username}!` , message: "Você já está logado!", type:simpleMessage })
      setTime(4.5)
      setHasMessage(true)
      setCookie("isEnableLogin", false)
      setCookie("username",username);
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
          <InputText required={true} disabled={isEnable} type="text" maxLength={30} minLength={3} name="username" placeholder={isEnable? username: "@username"} />
        </div>
        {isEnable?<PasswordInput label="Sua senha" placeholder="Digite a sua senha." name="password" />:<></>}

        <div className='buttonArea'>
          <button className='loginButton'> {isEnable? "Entrar" : "Próximo"} </button>
          {isEnable?<button onClick={() => setIsEnable(false)} className='backButton'> Voltar </button>:<></>}
        </div>
        {signUpButton && !isEnable ?(
          <button onClick={() => navigate("/signUp")} id="signUp"> Ir para a pagina de cadastro </button>
        ):<></>}
      </form>
    </Container>
  );
}

export default Login;