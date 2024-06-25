import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    scale: 1;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    color: ${theme.colors.black.jet};
  }

  h1, h2, h3, h4 ,h5, h6, span {
    font-family: 'Quicksand', sans-serif;
  }

  ::-webkit-scrollbar {
        display: none;
    }
      
`;

export default GlobalStyles;
