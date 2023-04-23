import { Home } from "./pages/home/index";
import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import {defaultTheme} from './styles/themes/default'

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

