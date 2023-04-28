import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/routes";
import cartContext  from '../src/contexts/myContexts'
import { useState } from 'react';
import { CoffeeType } from './@types/coffe';


export function App() {
  const [coffee, setCoffee] = useState<CoffeeType[]>([]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <cartContext.Provider value={{coffee, setCoffee}}>
          <BrowserRouter >
            <Router />
          </BrowserRouter>
        </cartContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

