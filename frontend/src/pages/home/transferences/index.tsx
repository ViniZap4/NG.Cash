import React, { FormEvent, useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

import axios from 'axios';
import { apiAdress } from '../../../services/api';

import { Container } from './styles';
import Transaction from './transaction';

interface transaction {
  id: string,
  value: string,
  debitedaccountId: string,
  creditedaccountId: string,
  createdAt: string,
}

const Transferences: React.FC = () => {
  const [cookies, setCooke] = useCookies()
  const [dataContent, setDataContent] = useState<transaction[]>([])

  useEffect(()=>{
    getTransactions()
  },[])

  async function getTransactions(){
    await axios.get(`${apiAdress}/balance/${cookies.userID}`, {
      headers: {
        'Authorization': `token ${cookies.userToken}`
      }
    })
    .then((res) => {
      const debitedTransactions = res.data.Account.debitedTransactions
      const creditedTransactions = res.data.Account.creditedTransactions
      const fusionDate = debitedTransactions.concat(creditedTransactions)
      const data = fusionDate.sort((a:transaction,b:transaction) => (a.createdAt > b.createdAt)? -1 : 1)
      setDataContent(data)
      console.log(data)
      

    })
    .catch((error) => {
      return
    })
  }

  interface filter{
    credited: boolean,
    debited: boolean
    date?: string
  }

  const [filterContent, setFilterContent] = useState<filter>({credited: true, debited: true});  
  const [filterDate, setFilterDate] = useState("");  

  useEffect(()=>{
    console.log(filterContent)
  },[filterContent])

  function filter(event: FormEvent){
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)

    setFilterContent({
      credited: !(!data.credits),
      debited: !(!data.debits),
      date: filterDate
    })
  }

  return (
    <Container>
      <h3> Transferencias: </h3>
      <div className="contentBox">
        <form onSubmit={filter} className='filters' >
          <h4> Filtro:</h4>

          <div className='filterType'>
            <div className='checkBoxContainer'>
              <input id="credits" className="checkmark" type="checkbox" name="credits" value="credits" />
              <label htmlFor='credits'> Creditados </label>
            </div>
          
            <div className='checkBoxContainer'>
              <input id="debits"  className="checkmark" type="checkbox" name="debits" value="debits"  />
              <label htmlFor='debits'> Debitados </label>
            </div>
          </div>
          <div className='filterDate'>
            <select id="Date" onChange={e => setFilterDate(e.target.value)}>
              <option value="year"> Neste Ano</option>
              <option value="month">Neste Mês</option>
              <option value="day">  Hoje</option>
            </select>
          </div>
          <button className='buttonFilter'> filtrar </button>
        
        </form>
        <div className="contentsBox">
          {!dataContent? "Não há transações feitas": dataContent.map(item => (<>
            <Transaction content={item} filter={filterContent} />
          </>))}
        </div>
      </div>
    </Container>
  );
}

export default Transferences;