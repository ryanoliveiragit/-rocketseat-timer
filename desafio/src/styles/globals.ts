import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*::-webkit-scrollbar {
  width: .7em;
}
 
*::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme["base-button"]};
}
 
*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}
    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.background};
        font-family: 'Roboto', sans-serif;
    }
`;
