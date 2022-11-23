import styled from "styled-components";

interface titleStyle{
  color?: string;
}

export const Title = styled.h1<titleStyle>`
  color: ${titleStyle => titleStyle.color};
  margin: 1.8vw 0vw;
  font-size: 6.3vh;

  @media screen and (orientation: portrait){  
   
    font-size: 4.5vw;
    
  }


`