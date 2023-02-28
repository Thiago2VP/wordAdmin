import styled from "styled-components";

export const Presentation = styled.main`
  .page-section {
    min-height: 74vh;
    padding: 3rem auto 0 auto;
  }

  .container {
    max-width: 125rem;
    margin: 3rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    text-align: center;
  }

  .title {
    margin-bottom: 5rem;
    font-size: 5rem;
    color: var(--primary-color);
  }

  .container form {
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    text-align: center;
  }

  .container input {
    font-size: 2rem;
    margin: 0 auto 3rem auto;
    padding: 1rem;
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    color: var(--primary-color);
  }

  .container input:focus {
    border: 1px solid var(--extra-color-red);
  }

  .container input::placeholder {
    color: var(--extra-color-red);
  }

  .container button {
    font-size: 2rem;
    margin: 0 auto;
    padding: 1rem;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    border: 1px solid var(--extra-color-red);
  }

  .container button:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;
