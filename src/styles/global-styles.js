import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .fonts-loaded {
    body {
      font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }
  a {
    text-decoration: none;
  }
  button, a {
    &:focus {
      outline: none;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
`;

export default GlobalStyle;
