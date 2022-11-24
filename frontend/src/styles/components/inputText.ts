import styled from "styled-components";

export const InputText = styled.input`
  font-size: 2.1vh;
  border: none;
  margin: 1.2vh 1.2vw;
  margin-bottom: 3vh;
  border-bottom: 0.36vh solid #ccc;
  color: ${props => props.theme.colors.primary};
  &:focus{
    border-bottom: 0.36vh solid ${props => props.theme.colors.primary};
  }
`