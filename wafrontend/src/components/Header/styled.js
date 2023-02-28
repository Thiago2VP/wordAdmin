import styled from "styled-components";

export const Nav = styled.nav`
    .general {
        margin: 0
        padding-top: 1rem;
        margin-bottom: 0.5rem;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        min-height: 8rem;

    }

    .container {
        max-width: 105rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-itens: center;
        justify-content: space-between;
        padding: 2rem;
    }

    .home a {
        font-size: 3.5rem;
        text-decoration: none;
        color: white;
    }

    .home a:hover {
        text-decoration: underline;
    }

    .options {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
    }

    .options a {
        font-size: 3.5rem;
        text-decoration: none;
        color: white;
    }

    .options a:hover {
        text-decoration: underline;
    }

`;
