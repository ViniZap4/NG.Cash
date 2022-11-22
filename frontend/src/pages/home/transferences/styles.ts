import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height:10vh;
  margin-top: 3vh;
  background-color: ${props => props.theme.colors.boxBackground};
  border-radius: 0.9vh;
  box-shadow: 0px 0px 2.1vh #000;
  animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  .contentBox{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 2.1vh;
    .debitedBox{
      display: flex;
      flex-direction: column;
      align-content: stretch;
    }
    .transaction{
      display: flex;
      flex-direction: column;
    
    }
  }

`