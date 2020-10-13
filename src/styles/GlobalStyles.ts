import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;
