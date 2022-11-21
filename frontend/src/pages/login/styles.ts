import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};

  .title{
    color: #fff;
    margin: 1.8vw 0vw;
    font-size: 6.3vh;
  }

`