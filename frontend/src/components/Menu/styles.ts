import styled from "styled-components";
 

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: max-content;
  z-index: 5;

  .logoContainer{
    display: flex;
    

    .logo{
      height:5vh;
      margin: 1.2vh 0.9vw;
      border-radius: 0.9vh;
      overflow: hidden;
      box-shadow: 0px 0px 0.9vh #000;
      img{
        height: 100%;
      }
    }
  }
  .tabContainer{
    display: flex;
    flex-direction: row;
  }

`