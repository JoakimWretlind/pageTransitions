import { createGlobalStyle } from 'styled-components';

/** THEME-PROVIDER **/
export const mainTheme = {
    gray: "#444",
    white: "#f1f1f1"
};

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'montserrat', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;