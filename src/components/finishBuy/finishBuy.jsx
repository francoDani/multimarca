import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/CartContext";

const FinishContainer = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid var(--light-gray);
  box-shadow: 0 0 10px 1px var(--light-gray);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Finish = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--light-green);
  color: var(--light-green);
  font-weight: bold;
  background-color: var(--white);
  transition: 0.5s;
  cursor: pointer;  
  &:hover {
    background-color: var(--light-green);
    color: white;
  }
`;

const FinishBuy = () => {
    const {totalShop} = useContext(CartContext);
  return (
    <FinishContainer>
      <Finish>Ir a pagar</Finish>
      <h1>Total: {totalShop.toFixed(2)}</h1>
    </FinishContainer>
  );
};

export default FinishBuy;
