import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};

  .loginBox{
    display: flex;
    flex-direction: column;
    flex-grow: 0.6;
    min-width: 27vw;
    width: 200px;

    .loginInput{
      display: flex;
      flex-direction: column;
      background-color: ${props => props.theme.colors.boxBackground};
      border-radius: 0.9vh;
      box-shadow: 0px 0px 3vh #000;
      width: 100%;
      margin: 0.9vh 0vw;
      animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    }
  
    .buttonArea{
      display: flex;
      flex-direction: row-reverse;
      align-items: stretch;
      justify-content: space-between;

      width: 100%;
   
      .loginButton, .backButton{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-size: 2.1vh;

        margin: 0.9vh 0vw;

        padding: 1.2vh 0.9vw;

        background-color: ${props => props.theme.colors.boxBackground};
        border-radius: 0.9vh;
        box-shadow: 0px 0px 3vh #000;
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        
      }
      .loginButton{
        flex-grow: 1;
      }
      .backButton{
        margin-right: 0.9vw;
      }
    }
  
  }
  
  @media screen and (orientation: portrait){
    .loginBox{
      width: 81vw;
    }
  }
`