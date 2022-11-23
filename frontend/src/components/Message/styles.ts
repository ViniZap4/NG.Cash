import styled from "styled-components";
import { styleType } from ".";
 

export const Container = styled.div<styleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 5vh;

  min-width: 10vw;
  max-width: 25vw;

  text-align: center;


  background-color: ${styleType => styleType.backgroundColor};
  padding: 0.9vh 0.9vw;
  border-radius: 0.9vh;
  box-shadow: 0px 0px 3.6vh #000;
  
  animation:  ${styleType => styleType.animation} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  .title{
    font-size: 2.4vh;
    color: ${styleType => styleType.color};
    margin: 1.9vh 0.9vw;
    font-weight: bold;
    margin-bottom: 0vh;
  }

  .message{
    font-size: 2.1vh;
    color: ${styleType => styleType.color};
    margin-top: 0vh;
    margin: 1.9vh 0.9vw;

  }

  @media screen and (orientation: portrait){  
     max-width: 80vw;
  }
`