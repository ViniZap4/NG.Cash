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
    createdAt: string,
  },
  filter:{
    credited: boolean,
    debited: boolean
    date?: string
  }
}){
  const [cookies, setCookies] = useCookies()
  const [isDebited, setIsDebited] = useState(false)
  const [username, setUsername] = useState()

  const date = new Date(props.content.createdAt)
  
  const day = date.getDate()
  const year = date.getFullYear()
  const month = (date.getMonth()+1)
  const hour = date.getHours() < 10? "0" + date.getHours(): date.getHours()
  const minutes = date.getMinutes() < 10? "0" + date.getMinutes(): date.getMinutes()
  const now = new Date()

  useEffect(()=>{
    getUser()
    getCredited()
  },[])


  if(props.filter.date !== undefined){
    
    if((props.filter.date === "year" && year !== now.getFullYear()) 
                                    ||
        (props.filter.date === "month" && month !== now.getMonth()+1)
                                    ||
        (props.filter.date === "day" && day !== now.getDate())
    ){
      return <></>
    }
  } 
  



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

 

  if((isDebited && props.filter.debited ) || (!isDebited && props.filter.credited )) {
    return(
      <Container isDebited={isDebited} key={props.content.id}>
        <span className='title'>{isDebited? "Debitado" : "Credidado"}:</span>
        <div className="content">
          <span className='text'>
            O foi {isDebited? "Debitado" : "Credidado"} valor de 
            <b>{isDebited? " -" : " +"} R${props.content.value}</b>
      
            {isDebited? " para " : " pelo "}
            <b>{username}</b>.
          </span>
          <span className='text'>
            No dia  <b> {day}/{month}/{year} às {hour}:{minutes}. </b>
          </span>
        </div>
      </Container>
    )
  }else{
    return <></>
  }
}

export default Transaction;