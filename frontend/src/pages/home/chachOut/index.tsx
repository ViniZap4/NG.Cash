import axios from 'axios';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { error, simpleMessage, warnig } from '../../../components/Message';
import { MessageContext } from '../../../context/messageContext';
import { apiAdress } from '../../../services/api';
import { InputText } from '../../../styles/components/inputText';
import { LabelText } from '../../../styles/components/label';

import { Container } from './styles';
import { UserContext } from "../../../context/userContext";

const Tranference: React.FC = () => {
  const [cookies, setCooke] = useCookies()
  const [isEnable, setIsEnable] = useState(false)
  const [username, setUsername] = useState("")
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)
  const [balanceValue, setBalanceValue] = useState(0)
  const {setBalance} = useContext(UserContext)
  
  useEffect(()=>{
    CheckBalance()
  },[])


  async function CheckUsername(event: {[k:string]: FormDataEntryValue}){
    try{
      await axios(`${apiAdress}/username/${event.username}`).then(response => {
        if(response.data.username === null){
          setMessage({ title:"Este usuário não existe!", message:"Tente novamente.", type:error })
          setTime(5)
          setHasMessage(true)
          setIsEnable(false)
          return
        }else if (response.data.username === cookies.username){
          setMessage({ title:"Algo não está certo!", message:"Você não pode enviar para você mesmo.", type:warnig })
          setTime(5)
          setHasMessage(true)
          setIsEnable(false)
          return
        }
        setIsEnable(true)
        //setUsername(event.username.toString())  
      })
    }catch (err){
      setMessage({ title:"Erro", message:"Esse usuário não existe", type:error })
      setTime(3)
      setHasMessage(true)
    }
  }

  async function CheckBalance(){
    try{
      await axios.get(`${apiAdress}/balance/${cookies.userID}`, {
        headers: {
          'Authorization': `token ${cookies.userToken}`
        }
      })
      .then((res) => {
        setBalanceValue(res.data.Account.balance.toFixed(2))
      })
      .catch((error) => {
        console.log(error)
        return
      })
    }catch (err){
      setMessage({ title:"Erro", message:"Esse usuário não existe", type:error })
      setTime(3)
      setHasMessage(true)
    }
  }

  async function MakeTransaction(event: FormEvent){
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(Number(data.value) <= 0){
      setMessage({ title:"Erro", message:`Valor para a transferencia é invalido` , type:error })
      setTime(12)
      setHasMessage(true)
      
      return
    }

    if (!isEnable){
      await CheckUsername(data)
      return
    }

    CheckBalance()

    if(balanceValue >= Number(data.value)){
      await axios.post(`${apiAdress}/transaction/${cookies.userID}`,{
      
        usernameToCredit: data.username,
        value: Number(data.value),
      },{ headers: {
        'Authorization': `token ${cookies.userToken}`
      }})
      .then(function (response) {
        setMessage({ title:"Valor enviado!", message:`Você transferiu ${data.value} para o ${data.username}!` , type:simpleMessage })
        setTime(12)
        setHasMessage(true)
        setBalance(response.data.chashOut.balance)
      })
      .catch(function (err){
        console.log(err)
      });
      return  
    } 
    setMessage({ title:"Algo não está certo", message:`Você não tem quantidade o suficiente.` , type:warnig })
    setTime(9)
    setHasMessage(true)
  }

  return (
    <Container>
      <h3> Transferir: </h3>
      <div className="contentBox">
        <form onSubmit={MakeTransaction} className='transactionBox'>
          <div className='inputContainer'>
          <div className='inputbox'>
            <LabelText htmlFor="username">Transferir para:</LabelText>
            <InputText required={true} onChange={() => setIsEnable(false)}  type="text" maxLength={30} minLength={3} name="username" placeholder="@username" />
          </div>

          {isEnable? 
            <div className='inputbox'>
              <LabelText htmlFor="username"> valor:</LabelText>
              <InputText required={true} disabled={!isEnable} type="number" maxLength={30} minLength={3} name="value" placeholder="valor a transferir" />
            </div>
          :<></>}
          
          </div>
          <div className='buttonArea'>
          <button className='loginButton'> {isEnable? "Transferir" : "Próximo"} </button>
          {isEnable?<button onClick={() => setIsEnable(false)} className='backButton'> Voltar </button>:<></>}
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Tranference;