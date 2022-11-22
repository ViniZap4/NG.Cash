import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Title } from "../../styles/components/title";
import {Container} from "./styles"

import visibleImage from "../../assets/icons/visible.svg"
import axios from "axios";
import { apiAdress } from "../../services/api";

const Home: React.FC = () => {
  const [cookies, setCooke] = useCookies()
  const navigate = useNavigate()
  const [balanceVisible, setBalanceVisible] = useState(false)
  const [balanceValue, setBalanceValue] = useState("***********")

  console.log(cookies.username)

  useEffect(()=>{
    if(cookies.username === undefined ||cookies.username === null || !cookies.username){
      navigate("/login")
    }
  },[])

  async function handleVisible(){
    if(balanceVisible){
      setBalanceValue("***********")
      setBalanceVisible(false)
      return
    }
    
    await axios.get(`${apiAdress}/balance/${cookies.userID}`, {
      headers: {
        'Authorization': `token ${cookies.userToken}`
      }
    })
    .then((res) => {
      console.log(res.data)
      setBalanceValue(res.data.Account.balance)
    })
    .catch((error) => {
      console.error(error)
    })

    setBalanceVisible(true)
  }



  return(
    <Container>
      <div className="titleBox">
        <Title color="#fff"> Olá {cookies.username}!</Title>
      </div>
      <div className="accountBox">
        <div className="balanceBox">
          <h2>Conta:</h2>
          <div className="balanceValue">
            <div className="head">
              <span className="HeadTitle">Saldo:</span>
              <button className="visibleButton" onClick={handleVisible}>
                <img src={visibleImage} alt="visibleButton" />
              </button>
            </div>
            <div className="balance">
              <span className="value">
                {balanceValue}
              </span>
            </div>
          </div>
        </div>
        <div className="acctionButtonBox">
          <button id="makeTransaction" className="acctionButton">
            transferir
          </button>
          <button id="seeTransation" className="acctionButton">
            ver transferencias
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Home