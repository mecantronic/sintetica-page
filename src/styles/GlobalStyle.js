// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Define tus fuentes globales aquí */
  body {
    font-family: 'Montserrat', sans-serif;
    max-width: 100vw;
    scale: 1;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4 ,h5 {
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyles;
