import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

import axios from 'axios';
import { apiAdress } from '../../../services/api';

import { Container } from './styles';
import Transaction from './transaction';

const Transferences: React.FC = () => {
  const [cookies, setCooke] = useCookies()
  const [dataContent, setDataContent] = useState([])


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
      setDataContent(debitedTransactions.concat(creditedTransactions))

    })
    .catch((error) => {
      return
    })
  }

  return (
    <Container>
      <h3> Transferencias: </h3>
      <div className="contentBox">
        <form className='filters'>
        </form>
        <div className="contentsBox">

          {!dataContent? "Não há transações feitas": dataContent.map(item => (<>
            <Transaction content={item} />
          </>))}

        </div>
      </div>
    </Container>
  );
}

export default Transferences;