import styled from "styled-components";
import { AddToCartButton } from "./addToCartButton";
import { counterFunction, showCount } from "./counterFunction";


const ConuterContainer = styled.div`
  width: 300px;
  height: 150px;
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
  background-color: white;
`;

export const ItemCount = () => {
  return (
    <ConuterContainer>
      <ItemTittle>Gracia Smg-2031</ItemTittle>
      <ItemCounterSection>
        <ItemCounterButton onClick={counterFunction} value='subtract'>-</ItemCounterButton>
        <ItemCounterAmmount id="counterValue">{showCount}</ItemCounterAmmount>
        <ItemCounterButton plus="true" onClick={counterFunction} value='add'>+</ItemCounterButton>
      </ItemCounterSection>
      <AddToCartButton>
        Agregar al carrito
      </AddToCartButton>
    </ConuterContainer>
  );
};
