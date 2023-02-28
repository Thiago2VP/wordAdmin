import styled from "styled-components";

export const Presentation = styled.main`
  .page-section {
    min-height: 80vh;
    padding: 3rem auto;
  }

  .container {
    max-width: 125rem;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    padding: 3rem 1.7rem;
    margin: 1rem;
    background-color: var(--primary-color);
    border-radius: 2rem;
    color: white;
    width: 95%;
    height: 19rem;
  }

  .card:hover {
    box-shadow: 0.5rem 0.5rem 1rem grey;
  }

  .titleInfo {
    padding-bottom: 1rem;
  }

  .contentInfo {
    padding-bottom: 0.8rem;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .subOptions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-itens: center;
    padding-top: 1.5rem;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .edit {
    text-decoration: none;
    color: var(--secondary-color);
  }

  .delete {
    text-decoration: none;
    color: var(--extra-color-red);
  }

  .edit:hover {
    text-decoration: underline;
  }

  .delete:hover {
    text-decoration: underline;
  }
`;
