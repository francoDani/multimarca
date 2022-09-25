import styled from "styled-components";

const EmptyMessage = styled.div`
    height: 8rem;    
    color: var(--blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const EmptyCart = () => {
    return(
        <EmptyMessage>
            <h1>Aún no tienes nada en tu carrito</h1>
            <p>Cuando agregues un item lo verás aqui</p>
        </EmptyMessage>
    )
}

export default EmptyCart;