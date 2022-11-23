import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { apiAdress } from '../../../../services/api';
import { Container } from './styles';


function Transaction(props: {
  content: {
    id: string,
    value: string,
    debitedaccountId: string,
    creditedaccountId: string,
  }
}){
  const [cookies, setCookies] = useCookies()
  const [isDebited, setIsDebited] = useState(false)
  const [username, setUsername] = useState()

  useEffect(()=>{
    getUser()
    getCredited()
    
  },[])

  async function getUser(){
    try{
      await axios.get(`${apiAdress}/user/${props.content.debitedaccountId}`)
      .then((res) => {
        if(res.data.username === cookies.username){
          setIsDebited(true)
        }else{
          setUsername(res.data.username)
        }
      })
      .catch((error) => {
        console.log(error)
        return
      })
    }catch (err){
      console.log(err);
    }
  }
  async function getCredited(){
    try{
      await axios.get(`${apiAdress}/user/${props.content.creditedaccountId}`)
      .then((res) => {
        if(res.data.username === cookies.username){
          setIsDebited(false)
        }else{
          setUsername(res.data.username)
        }
      })
      .catch((error) => {
        console.log(error)
        return
      })
    }catch (err){
      console.log(err);
    }
  }
  return(
    <Container isDebited={isDebited} key={props.content.id}>
      <span className='title'>{isDebited? "Debitado" : "Credidado"}:</span>
      <div className="content">
        <span className='text'>
          O valor de {isDebited? "-" : "+"} R${props.content.value}
          {isDebited? " para " : " de "}
          <b>{username}</b>
          </span>
      </div>
      
    </Container>
  )
}

export default Transaction;