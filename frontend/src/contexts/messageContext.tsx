import { createContext, ReactNode, useEffect, useState} from "react";
import Message, {message} from "../components/Message/index";
import usePersistedState from "../util/usePersistedState";

// settings types for messages contexts
type UserContextType = {
  messages: message; setMessage: (newState: message) => void
  hasMessage: boolean , setHasMessage: (newState: boolean) => void,
  time: number, setTime: (newState: number) => void
  
}

// settings initial Values for user contexts
const InitialValues ={
  messages: {} as message,setMessage: () => {},
  hasMessage: false, setHasMessage: () => {},
  time: 0, setTime: () => {}

}

// Creating User Contexts
export const MessageContext = createContext<UserContextType>(InitialValues)

// Setting UserProviderContext types
type messagesProviderProps = {
  children: ReactNode
}

const MessageContextProvider = ({children}: messagesProviderProps) => {
  const  [messages, setMessage] = usePersistedState("message",InitialValues.messages);
  const  [hasMessage, setHasMessage] = useState(false)
  const  [time, setTime] = usePersistedState("messageTime",0)

  useEffect(()=>{
    console.log(hasMessage)
    if(hasMessage){
      setTimeout(() => {
        setHasMessage(false)
      }, time *1000);
    }
  },[messages, hasMessage,time])

  return(
    <MessageContext.Provider 
      value={{
        messages, setMessage,
        hasMessage, setHasMessage,
        time, setTime
      }}
    >
      {hasMessage? <Message title={messages.title} message={messages.message} type={messages.type}/> : <></>}

      {children}
    </MessageContext.Provider>
  )
}

export default MessageContextProvider;