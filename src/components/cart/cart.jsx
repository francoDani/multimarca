import styled from "styled-components";
import ItemCartContainer from "./itemCartContainer";

const CartContainer = styled.div`  
  width: 100%;
  display: flex;  
  justify-content: center;
`

export const Cart = () => {  

  return (
    <CartContainer>
      <ItemCartContainer></ItemCartContainer>      
    </CartContainer>
  );
};
