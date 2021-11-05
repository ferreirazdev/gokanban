import { createGlobalStyle } from 'styled-components';

import bg from "../assets/back.png";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #181b23 url(${bg}) no-repeat 95% 95% fixed;
    color: #fff;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, sans-serif;
  }
`;