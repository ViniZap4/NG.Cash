import React, { useEffect, useState } from 'react';

import { Container } from './styles';

export type styleType = {
  backgroundColor: string,
  color: string,
  animation?: string,
}

export interface message{
  title: string;
  message: string;
  type: styleType;
}



const Message: React.FC<message> = ({title, message, type}) => {
  const [animation, setAnimation] = useState("slide-in-blurred-top")

  return (
    <Container backgroundColor={type.backgroundColor} color={type.color} animation={animation}>
      <span className='title'>
        {title}
      </span>
      <span className='message'>
        {message}
      </span>
    </Container>
  );
}

export default Message;


export const simpleMessage = {
  backgroundColor : "#cce5ff",
  color : "#004085",
}

export const error = {
  backgroundColor : "#f8d7da",
  color : "#721c24",
}

export const warnig = {
  backgroundColor : "#fff3cd",
  color : "#856404",
}