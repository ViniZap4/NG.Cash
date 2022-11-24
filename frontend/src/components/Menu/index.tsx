import React, { useEffect } from 'react';

import { Container } from './styles';

import logoImg  from '../../assets/icons/logo.png';
import MenuItem from './MenuItem';
import { useCookies } from 'react-cookie';


const Menu: React.FC = () => {
  const [ cookies, setCooke, removeCookie] = useCookies()

  function ChangeUrl(link: string) {
    document.location.href = link
  }

  function IsUserLogged(){
    if (cookies.userToken === undefined) return false
    return true
  }

  function signOut(){
    if(IsUserLogged()){
      removeCookie("userToken")
      removeCookie("username")
      console.log("user sign out")
      ChangeUrl("./login")
    }
  }

  return (
    <Container>
      <div className='logoContainer'>
        <a className='logo' href='./'>
          <img src={logoImg} alt="logo" />
        </a>
      </div>
      <div className='tabContainer'>

        {
        IsUserLogged()?(<>
          <MenuItem text="Home" action={() => ChangeUrl("./")} />
          <MenuItem text="Sair" action={signOut} />
          </>):(<>
            <MenuItem text="Criar uma conta" action={() => ChangeUrl("./signup")} />
            <MenuItem text="Login" action={() => ChangeUrl("./login")} />
          </>)
        }
      </div>
    </Container>
  );
}

export default Menu;