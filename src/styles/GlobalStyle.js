import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    src: url('./assets/fonts/Poppins-Regular.ttf') format('.ttf');
  }

  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    src: url('./assets/fonts/Poppins-Medium.ttf') format('.ttf');
  }
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    src: url('./assets/fonts/Poppins-SemiBold.ttf') format('.ttf');
  }

  /* Reset Start */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;

    list-style-type: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;

    flex: 1;
  }

  main {
    flex: 1;
  }

  body {
    display: flex;
    flex-direction: column;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  /* Reset End */
`;
