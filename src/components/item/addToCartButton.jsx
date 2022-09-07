import styled from "styled-components";

export const AddToCartButton = styled.a`
    background-color: var(--blue);
    border-radius: 3px;
    padding: .5rem;
    margin: .3rem;
    font-size: .8rem;
    font-weight: 600;
    cursor: pointer;
    color: white;
    transition: all .3s;
    &:hover {
        background-color:#1972f8;
        color: white;
    }
`