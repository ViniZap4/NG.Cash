import { useContext } from "react";

//router
import AppRouter from "../routes"

//import styles
import Animations from "../styles/animations"
import GlobalStyles from "../styles/GlobalStyles"

//import themes
import {ThemeProvider } from 'styled-components';

//import contexts
import themeContext from "../contexts/themeContext";
import MessageContextProvider from "../contexts/messageContext";
import UserContextProvider from "../contexts/userContext";
import Menu from "../components/Menu";

function App() {
  const {theme} = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <MessageContextProvider>
        <UserContextProvider>
          <Menu />
          <Animations />
          <GlobalStyles />
          <AppRouter />
        </UserContextProvider>
      </MessageContextProvider>     
    </ThemeProvider>
  </>)
}

export default App
