import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Title } from "../../styles/components/title";
import {Container} from "./styles"
import { MessageContext } from '../../contexts/messageContext';
import visibleImage from "../../assets/icons/visible/visible-white.svg"
import axios from "axios";
import { apiAdress } from "../../services/api";
import Transferences from "./transferences";
import Tranference from "./chachOut";
import { UserContext } from "../../contexts/userContext";
import { error } from "../../components/Message";

const Home: React.FC = () => {
  const [cookies] = useCookies()
  const navigate = useNavigate()
  const [balanceVisible, setBalanceVisible] = useState(false)
  const [balanceValue, setBalanceValue] = useState("***********")
  const [tranferencesVisible, setTranferencesVisible] = useState(false)
  const [tranferenceVisible, setTranferenceVisible] = useState(false)
  const {balance,setBalance} = useContext(UserContext)
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)

  useEffect(()=>{
    if(cookies.username === undefined ||cookies.username === null || !cookies.username){
      navigate("/login")
    }
  },[])

  useEffect(()=>{
    const interval = setInterval(() => {
        CheckBalance()
    }, 1000);

    return () => clearInterval(interval);
 }, []);

 useEffect(()=>{
    if(tranferenceVisible){
      setBalanceValue(balance.toString())
      console.log("check")
    }
  }, [balance]);


  async function handleVisible(){
    if(balanceVisible){
      setBalanceValue("***********")
      setBalanceVisible(false)
      return
    }
    CheckBalance(true)
    setBalanceVisible(true)

  }

  async function CheckBalance(updateValue:boolean = false){
    try{
      await axios.get(`${apiAdress}/balance/${cookies.userID}`, {
        headers: {
          'Authorization': `token ${cookies.userToken}`
        }
      })
      .then((res) => {
        if(updateValue){
          setBalanceValue(res.data.Account.balance.toFixed(2))
        }
        setBalance(res.data.Account.balance.toFixed(2))
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

  function switchTransferencesVisible(){
    if(tranferencesVisible){
      setTranferencesVisible(false)
      return
    }
    setTranferencesVisible(true)
    setTranferenceVisible(false)
  }

  function switchTransferenceVisible(){
    if(tranferenceVisible){
      setTranferenceVisible(false)
      return
    }
    setTranferenceVisible(true)
    setTranferencesVisible(false)
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
                R$ {balanceValue}
              </span>
            </div>
          </div>
        </div>
        <div className="acctionButtonBox">
        {!tranferenceVisible? (
          <button id="makeTransaction" className="actionButton" onClick={switchTransferenceVisible}>
            Transferir
          </button>
        ) :<button id="closeButton" className="actionButton" onClick={switchTransferenceVisible}>
              Fechar janela
          </button>
        }
        {!tranferencesVisible? (
            <button id="seeTransation" className="actionButton" onClick={switchTransferencesVisible}>
              Ver transferencias
            </button>
          ): <button id="closeButton" className="actionButton" onClick={switchTransferencesVisible}>
               Fechar janela
             </button>
          }
        </div>
        {tranferencesVisible? <Transferences />: <></>}
        {tranferenceVisible? <Tranference />: <></>}

      </div>
    </Container>
  );
}

export default Home