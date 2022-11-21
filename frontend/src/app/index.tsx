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

function App() {
  const {theme} = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <Animations />
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </>)
}

export default App
