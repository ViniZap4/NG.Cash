import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      height: 0vh;
      width: 0vw;
      margin: 0vh 0vw;
      padding: 0vh 0vw;
      opacity: 0;
      
    }
    20%{
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }


`