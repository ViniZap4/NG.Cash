import React from 'react';

import { Container } from './styles';

interface MenuItemType{
  text: string,
  action: () => void,
}

const MenuItem: React.FC<MenuItemType> = ({
   text, action
}) => {

  function hundleAction(){
    action()
  }

  return (
    <Container onClick={hundleAction}>
      <span>
        {text}
      </span>
    </Container>
  );
}

export default MenuItem;