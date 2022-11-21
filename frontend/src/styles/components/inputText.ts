import styled from "styled-components";

export const InputText = styled.input`
  font-size: 2.1vh;
  border: none;
  margin: 0.45vh 0.9vw;
  margin-bottom: 1.2vh;
  border-bottom: 0.36vh solid #ccc;
  color: ${props => props.theme.colors.text};
  &:focus{
    border-bottom: 0.36vh solid ${props => props.theme.colors.text};

  }
`