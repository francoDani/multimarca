import styled from "styled-components";

export const AddToCartButton = styled.a`
    border: solid 1px var(--shiny-green);
    border-radius: 3px;
    padding: 3px;
    font-size: .8rem;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background-color: var(--shiny-green);
        color: white;
    }
`