import { useContext } from "react";

//router
import AppRouter from "../routes"

//import styles
import Animations from "../styles/animations"
import GlobalStyles from "../styles/GlobalStyles"

//import themes
import {ThemeProvider } from 'styled-components';

//import contexts
import themeContext from "../Context/themeContext";
import MessageContextProvider from "../Context/messageContext";
import UserContextProvider from "../Context/userContext";
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
