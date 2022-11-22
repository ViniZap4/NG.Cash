import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @keyframes slide-in-blurred-top {
    0% {
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}

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