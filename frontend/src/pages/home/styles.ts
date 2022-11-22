import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};

  .titleBox{
    display: flex;
    margin: 1.5vh 2.7vw;
  }

  .accountBox{
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      font-size: 3.6vh;
    }

    .head{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 2.1vh;
      .HeadTitle{
        font-size: 2.7vh;
      }
      .visibleButton{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        box-shadow: 0px 0px 2.7vh #00000066;
        border-radius: 0.9vh;
        img{
          width: 100%;
        }
      }
    }
    .balanceBox{
      background-color: ${props => props.theme.colors.boxBackground};
      padding: 1.8vh 2.1vw;
      border-radius: 0.9vh;
      box-shadow: 0px 0px 2.7vh #000;

      .balance{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.boxBackground};
        width: 20vw;  
        background-color: ${props => props.theme.colors.background};
        border-radius: 0.9vh;
        box-shadow: 0px 0px 2.7vh #00000066;
        .value{
          display: flex;
          font-size: 2.4vh;
          margin: 2.1vh 2.1vw;
        }
      }
    }
    .acctionButtonBox{
      margin-top: 2.1vh;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .acctionButton{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        font-size: 2.4vh;
        border-radius: 0.6vh;
        padding: 1.2vh 0.9vw;
      }
      #makeTransaction{
        margin-right: 0.6vw;
      }
      #seeTransation{
        margin-left: 0.6vw;
      }
    }
    

  }
`