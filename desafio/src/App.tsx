import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/routes";
import cartContext  from '../src/contexts/myContexts'
import { useState } from 'react';

export function App() {
  const [item, setItem] = useState([])

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <cartContext.Provider value={{item, setItem}}>
          <BrowserRouter >
            <Router />
          </BrowserRouter>
        </cartContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

