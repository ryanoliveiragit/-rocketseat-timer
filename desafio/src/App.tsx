import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/routes";
import { useState } from 'react';
import { CoffeeType } from './@types/coffe';
import CartContext from './contexts/myContexts';


export function App() {
  const [coffee, setCoffee] = useState<CoffeeType[]>([]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartContext.Provider value={{coffee, setCoffee}}>
          <BrowserRouter >
            <Router />
          </BrowserRouter>
        </CartContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

