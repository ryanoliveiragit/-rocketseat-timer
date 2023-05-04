import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/routes";
import {CartProvider} from './contexts/myContexts';


export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <BrowserRouter >
            <Router />
          </BrowserRouter>
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

