import styled, { createGlobalStyle } from 'styled-components';

export const lightMode = {
  text: 'hsl(200, 15%, 8%)',
  input: 'hsl(0, 0%, 52%)',
  background: 'hsl(0, 0%, 98%)',
  elements: 'hsl(0, 0%, 100%)',
};

export const darkMode = {
  elements: 'hsl(209, 23%, 22%)',
  background: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.background};
    }
`;
