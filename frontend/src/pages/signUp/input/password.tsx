import { InputText } from "../../../styles/components/inputText"

export const PasswordInputs: React.FC = () => {
  return(<>
  
    <PasswordInput 
      label="senha"
      placeholder="crie uma senha"
      name="password"
    />
      
    <PasswordInput 
      label="comfirmar a senha"
      placeholder="Digite a senha novamente"
      name="comfirmPassword"
    />
    
  </>)
}

function PasswordInput(props:{
  label: string,
  placeholder: string,
  name: string
}){
  return(
    <span id="inputPassword" className='signUpInput'>
      <label htmlFor="password"> {props.label} </label>
      <InputText
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