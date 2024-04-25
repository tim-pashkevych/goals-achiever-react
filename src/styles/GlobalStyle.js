import { createGlobalStyle } from 'styled-components';

import poppinsReqular from '../assets/fonts/Poppins-Regular.ttf';
import poppinsMedium from '../assets/fonts/Poppins-Medium.ttf';
import poppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: local("Poppins"), url(${poppinsReqular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    src: local("Poppins"), url(${poppinsMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    src: local("Poppins"), url(${poppinsSemiBold}) format('truetype');
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
  svg {
    display: block;
  }

  button {
    padding: 0;
    border: none;
    outline: none;
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
    font-size: 14px;
    
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
  
  /* Reset End */
`;
