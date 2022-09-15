import styled from "styled-components";

export const AddToCartButton = styled.button`
    background-color: var(--blue);
    margin: .5rem 0;
    padding: .4rem;
    border: none;
    border-radius: 3px;
    transition: all .2s;
    cursor: pointer;
    &:hover {
        background-color: var(--dark-gray);
        color: var(--white)
    }
`