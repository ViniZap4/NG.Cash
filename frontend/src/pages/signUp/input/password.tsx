import { InputText } from "../../../styles/components/inputText"

import { warnig } from '../../../components/Message';
import { MessageContext } from '../../../Context/messageContext';
import { useContext } from "react";
import { LabelText } from "../../../styles/components/label";

export const PasswordInputs: React.FC = () => {

  return(<>
  
    <PasswordInput 
      label="senha"
      placeholder="crie uma senha."
      name="password"
    />
      
    <PasswordInput 
      label="comfirmar a senha"
      placeholder="Digite a senha novamente."
      name="comfirmPassword"
    />
    
  </>)
}

export function PasswordInput(props:{
  label: string,
  placeholder: string,
  name: string
}){
  const {setMessage, setHasMessage, setTime} = useContext(MessageContext)
  
  function hundleMessage(){
    if(props.label !== "senha"){
      return
    }
    setMessage({ title:"Para criação de senha é necessário:", message:"É necessário que tenha pelo menos 1 letra maiuscula, minuscula e numero, tendo mais de 8 caracteres.", type:warnig })
    setTime(10)
    setHasMessage(true)
    
  }

  return(
    <span id="inputPassword" className='signUpInput loginInput'>
      <LabelText htmlFor="password"> {props.label}: </LabelText>
      <InputText
        onFocus={hundleMessage}
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        type="password" 
        name={props.name} 
        placeholder={props.placeholder}
        minLength={8} maxLength={16}
      />
  </span>
  )
}