import styled, { createGlobalStyle } from 'styled-components';

// Rest and GlobalStyles
export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 10px;
    }

    body {
        background-color: ${(props) => props.theme.background};
    }
    textarea:focus, input:focus{
    outline: none;
}
`;

// Global Stylings

// DIV's
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
