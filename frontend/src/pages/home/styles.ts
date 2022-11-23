import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};

  .titleBox{
    display: flex;
    margin: 1.5vh 2.7vw;
  }

  .accountBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    h2{
      font-size: 3.6vh;
      margin-bottom: 2.1vh;
    }
    .balanceBox{
      
      color: ${props => props.theme.colors.boxBackground};
      width: 100%;
      .balanceValue{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.boxBackground};
        padding: 1.8vh 2.1vw;
        border-radius: 0.9vh;
        box-shadow: 0px 0px 2.7vh #000;
        animation: scale-in-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        
        color: ${props => props.theme.colors.background};
        .head{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 2.1vh;
          
          .HeadTitle{
            font-size: 2.7vh;
            color: ${props => props.theme.colors.background};
          }
          .visibleButton{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            box-shadow: 0px 0px 2.7vh #00000099;
            background-color: ${props=> props.theme.colors.background};
            padding: 0.45vh;
            border-radius: 0.9vh;
            overflow: hidden;
            animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            img{
              width: 100%;
            }
          }
        }
        .balance{
          display: flex;
          align-items: center;
          justify-content: center;
         
          color: ${props => props.theme.colors.boxBackground};
          width: max-content;  
          min-width: 50%;
          background-color: ${props => props.theme.colors.background};
          border-radius: 0.9vh;
          box-shadow: 0px 0px 2.7vh #00000066;
          animation: scale-in-center 0.72s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

          .value{
            display: flex;
            font-size: 2.4vh;
            margin: 2.1vh 2.1vw;
          }
        }
      }
    }
    .acctionButtonBox{
      margin-top: 2.1vh;
      display: flex;
      justify-content: space-between;
      width: 100%;
      animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

      .actionButton{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        font-size: 2.4vh;
        border-radius: 0.6vh;
        padding: 1.2vh 0.9vw;
        box-shadow: 0px 0px 2.7vh #000;
        font-weight: bold;
      }
      #makeTransaction{
        margin-right: 0.6vw;
      }
      #seeTransation{
        margin-left: 0.6vw;
      }
      #closeButton{
        flex-grow: 0;
        background-color: #f8d7da;
        color : #721c24;
        
      }
    }
  }

  @media screen and (orientation: portrait){
    .accountBox{
      width: 90vw;
    }
  }
`