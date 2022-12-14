import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :Root{
    --title-size:6vh;
    --sub-title-size: 3.6vh;
    --text-size: 2.7vh;
  }
  
  *{
    padding: 0%;
    margin: 0%;

    border: border-box;
    transition: 0.3s;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border: none;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  #root{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`