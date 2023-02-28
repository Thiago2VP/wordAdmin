import styled, { createGlobalStyle } from "styled-components";
import "react-toastify";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
    }

    :root {
        --primary-color: #6b8e23;
        --secondary-color: #fff;
        --extra-color-blue: #238E7C;
        --extra-color-red: #8E2336;
        --extra-color-purple: #46238E;
        --main-font: 'Rubik', sans-serif;
    }

    html {
        font-size: 62.8%;
    }

    body {
        font-family: ubuntu, arial;
    }

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.4rem;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
      background: var(--primary-color);
      width: 5rem;
      height: 5rem;
      margin: 0 auto 7rem auto;
      border-radius: 100%;
    }
    
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
      background: var(--extra-color-red);
      width: 5rem;
      height: 5rem;
      margin: 0 auto 7rem auto;
      border-radius: 100%;
    }
`;

export const Container = styled.section`
  max-width: 50rem;
`;
