import React, { createContext, useContext } from "react";

import { DefaultTheme } from "styled-components";
import dark from "../styles/themes/dark";

type themeContextType = {
  theme: DefaultTheme,
}

const InitialValues ={
  theme: dark,
}

const themeContext = createContext<themeContextType>(InitialValues);

export default themeContext;