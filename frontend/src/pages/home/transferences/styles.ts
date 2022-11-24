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
  margin-bottom: 1.8vh;


  h3{
    margin: 2.1vh 0vw;
    font-size: 2.7vh;
  }

  .contentBox{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 2.1vh;


    .filters{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.9vh 0vw;
      border-bottom: 1.8vh solid ${props => props.theme.colors.secundary};

      
      h4{
        align-self: center;
        font-size: 2.1vh;
      }
      .filterType{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }

      .checkBoxContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.1vh;
        cursor: pointer;
        margin: 0vh 1.8vw;

        .checkmark {
          display: flex;
          height:1.8vh;
          width: 1.8vh;
          background-color: ${props => props.theme.colors.secundary};
          cursor: pointer;
        }
        label{
          cursor: pointer;
        }
      }
      .filterDate{
        display: flex;
        #Date{
          //appearance: none;
          background-color: transparent;
          border: none;
          padding: 0 1em 0 0;
          margin: 0;
          width: 100%;
          font-size: 1.8vh;
          line-height: inherit;
          border-radius: 0.6vh;
          border: 0.3vh solid ${props => props.theme.colors.secundary};
        }
      }
      .buttonFilter{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.9vh 1.8vw;
        font-size: 2.1vh;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secundary};
        border-radius: 0.6vh;
      }
    }
    .contentsBox{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: stretch;
      margin-top: 1.8vh;
    }
  }

`