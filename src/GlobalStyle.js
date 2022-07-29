import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --primary-color: #348888; 
    --secondary-color: #61dafb;
    --tertiary-color: #9EF8EE;
    --primary-contrast-color: #FA7F08;
    --secondary-contrast-color: #F24405;
    --primary-background: #282c34;
    --secondary-background: #818589;
    --tertiary-background: #71797E;
    --transparent: transparent;
  }

  body {
    background: var(--primary-background);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

`;

export default GlobalStyle;