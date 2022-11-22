import axios from "axios";
import { createContext, ReactNode, SetStateAction, useEffect, useState} from "react";
import { apiAdress } from "../services/api";
import { useCookies } from "react-cookie";


// settings types for messages contexts
type UserContextType = {
  username: string; setUsername: (newState: string) => void,
  balance: Number , setBalance: (newState: SetStateAction<number>) => void,
}

// settings initial Values for user contexts
const InitialValues ={
  username: "",setUsername: () => {},
  balance: 0, setBalance: () => {},
}

// Creating User Contexts
export const UserContext = createContext<UserContextType>(InitialValues)

// Setting UserProviderContext types
type userProviderProps = {
  children: ReactNode
}

const UserContextProvider = ({children}: userProviderProps) => {
  const  [username, setUsername] = useState(InitialValues.username);
  const  [balance, setBalance] = useState(InitialValues.balance)
  

  return(
    <UserContext.Provider 
      value={{
        username, setUsername,
        balance, setBalance
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;