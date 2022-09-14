import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddToCartButton } from "../item/addToCartButton";

const ItemCounterSection = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  z-index: 11;
`;
const ItemCounterButton = styled.button`
  width: 30px;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  border: none;
  margin: 0.2rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.plus ? "var(--light-green)" : "var(--light-red)"};
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

export const ItemCount = ({ initial, stock, route }) => {
  const [count, setCount] = useState(initial);
  const counting = (e) => {
    switch (e) {
      case "add":
        if (count < stock) {
          setCount(count + 1);
        }
        break;
      case "sub":
        if (count > 0) {
          setCount(count - 1);
        }
        break;

      default:
        break;
    }
  };
  const addToCart = (value) => {
    if (value !== 0) {
      console.log(value);
    }
  };
  return (
    <>
      <ItemCounterSection>
        <ItemCounterButton
          onClick={() => {
            counting("sub");
          }}
          value="subtract"
        >
          -
        </ItemCounterButton>
        <ItemCounterAmmount id="counterValue">{count}</ItemCounterAmmount>
        <ItemCounterButton
          plus="true"
          onClick={() => {
            counting("add");
          }}
          value="add"
        >
          +
        </ItemCounterButton>
      </ItemCounterSection>
      <Link to={"/"+route}>
        <AddToCartButton
          onClick={() => {
            addToCart(count);
          }}
        >
          Agregar al carrito
        </AddToCartButton>
      </Link>
    </>
  );
};
