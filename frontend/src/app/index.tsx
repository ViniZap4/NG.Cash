import { useContext } from "react";

//router
import AppRouter from "../routes"

//import styles
import Animations from "../styles/animations"
import GlobalStyles from "../styles/GlobalStyles"

//import themes
import {ThemeProvider } from 'styled-components';

//import contexts
import themeContext from '../Contexts/themeContext';
import MessageContextProvider from "../context/messageContext";

function App() {
  const {theme} = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <MessageContextProvider>
        <Animations />
        <GlobalStyles />
        <AppRouter />
      </MessageContextProvider>
    </ThemeProvider>
  </>)
}

export default App
