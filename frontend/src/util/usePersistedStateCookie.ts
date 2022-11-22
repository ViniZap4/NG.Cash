import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";


type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

export default function usePersistedStateCookie<T>(key: string, initialValue: T, expiresTime: Date): Response<T>{
  const  [cookies, setCookie] = useCookies()
  const [state, seState] = useState(() => {
    const storageValue = cookies.get(key);
    
    
    if(storageValue){
      return JSON.parse(storageValue)
    }else{
      return initialValue;
    }
  })

  useEffect(() =>{
    setCookie(key, JSON.stringify(state), {expires: expiresTime});
  },[key, state])

  return [state, seState]
}