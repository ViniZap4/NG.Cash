import styled from "styled-components";
interface propsStyle{
  isDebited: boolean;
}
export const Container = styled.div<propsStyle>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 1.2vh 1.2vw;
  padding: 1.2vh 0.9vw;
  flex-grow: 1;
  background-color: ${propsStyle => propsStyle.isDebited? "#f8d7da":" #d4edda"};
  color:  ${propsStyle => propsStyle.isDebited? "#721c24":" #155724"};
  border-radius: 0.45vh;
  box-shadow: 0px 0px 2.1vh #00000066;
  animation: scale-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
  .title{
    font-size: 2.1vh;
    margin-bottom: 0.9vh;
    font-weight: bold;
  }
  .text{
    display: block;
    margin: 0.9vh 0.9vw;
    font-size: 1.8vh;
    
  }
`