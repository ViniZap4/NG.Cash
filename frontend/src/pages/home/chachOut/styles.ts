import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height:10vh;
  margin-top: 3vh;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 0.9vh;
  box-shadow: 0px 0px 2.1vh #000;
  animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  h3{
    font-size: 3.1vh;
    margin: 2.7vh 0vw;
  }

  .contentBox{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    
    .transactionBox{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      
      .inputContainer{
        display: flex;
        flex-direction: row;
        .inputbox{
          display: flex;
          flex-direction: column;
          margin: 2.7vh 0vh;
          animation: scale-in-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
      }
      .buttonArea{
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 2.7vh;
        
        button{
          display: flex;
          margin: 0vh 0.9vw;
          background-color: ${props=> props.theme.colors.primary};
          color: ${props=> props.theme.colors.secundary};
          padding: 1.8vh 0.9vw;
          font-weight: bold;
          border-radius: 0.9vh;
        }
      }
      
    }
  }

`