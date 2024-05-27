import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {

  box-sizing: border-box;
}
  body {
    font-family: 'Quicksand', sans-serif;
    max-width: 100vw;
    scale: 1;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4 ,h5 {
    font-family: 'Quicksand', sans-serif;
  }

  audio::-webkit-media-controls-play-button,
     audio::-webkit-media-controls-panel {
     background-color: #EFECFF;
     }    
`;

export default GlobalStyles;
