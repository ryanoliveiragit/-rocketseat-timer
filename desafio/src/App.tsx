import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routes/routes";
import cartContext  from '../src/contexts/myContexts'
import { useState } from 'react';

export type CoffeeType = {
  quantity: string;
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string[];
  price: string;
};

export function App() {
  const [coffee, setCoffee] = useState<CoffeeType[]>([
    {
      quantity: '0',
      id: '1',
      name: '',
      description: '',
      image: '',
      tag: [''],
      price: '',
    },
  ]);


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

