import { useState } from "react";
import styled from "styled-components";
import { AddToCartButton } from "./addToCartButton";


const ConuterContainer = styled.div`
  width: 250px;
  height: 130px;
  background-color: #f5f5f5;
  border: solid 1px white;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const ItemTittle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
`;
const ItemCounterSection = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemCounterButton = styled.button`
  width: 30px;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.plus ? "var(--light-green)" : "var(--light-red)")};
  &:hover {
  }
`;
const ItemCounterAmmount = styled.p`
  width: 7rem;
  display: flex;
  flex-direction: center;
  justify-content: center;
  background-color: white;
`;

export const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);
  return (
    <ConuterContainer>
      <ItemTittle>Gracia Smg-2031</ItemTittle>
      <ItemCounterSection>
        <ItemCounterButton onClick={() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }} value='subtract'>-</ItemCounterButton>
        <ItemCounterAmmount id="counterValue">{count}</ItemCounterAmmount>
        <ItemCounterButton plus="true" onClick={() => {
            if (count < stock) {
                setCount(count + 1);
            }
        }} value='add'>+</ItemCounterButton>
      </ItemCounterSection>
      <AddToCartButton>
        Agregar al carrito
      </AddToCartButton>
    </ConuterContainer>
  );
};
