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

  #signUpBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 0.6;
    min-width: 25vw;
    max-width: 200px;
    background-color: ${props => props.theme.colors.background};



    .signUpInput {
      display: flex;
      flex-direction: column;

      width: 100%;
      
      margin: 0.9vh 0.9vw;
      background-color: ${props => props.theme.colors.boxBacground};

      
      border-radius: 0.9vh;
      box-shadow: 0px 0px 3vh #000;
      animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


      label{
        font-size: 2.7vh;
        margin: 0.5vh 0.9vw;
        margin-top: 1.2vh;
        color: ${props => props.theme.colors.text};
      }
    }
    .buttonArea{
      display: flex;
      flex-direction: row-reverse;
      align-items: stretch;
      justify-content: space-between;
        
      min-width: 15vh;

      width: 100%;
   
      .signUpButton, .backButton{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-size: 2.1vh;

        margin: 0.9vh 0vw;

        padding: 1.2vh 0.9vw;

        background-color: ${props => props.theme.colors.boxBacground};
        border-radius: 0.9vh;
        box-shadow: 0px 0px 3vh #000;
        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        
      }
      .signUpButton{
        flex-grow: 1;
      }
      .backButton{
        margin-right: 0.9vw;
      }
    }
  }

`