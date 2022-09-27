import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;
const CartButton = styled.button`
  width: 6rem;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  position: relative;
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
  margin-right: 1rem;
`;
const Quantiy = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  border: solid 1px var(--dark-gray);
  border-radius: 20px;
  text-align: center;
  background-color: var(--dark-gray);
  color: white;
`

export const CartWidwet = () => {
  const { cart, isOn } = useContext(CartContext);

  return (
    <CartButtonContainer>
      <Link to={"/cart"}>
        <CartButton style={cart.length === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}>
          <FontAwesomeIconStyled icon={faCartShopping} />
          Cart
          {isOn ? <Quantiy>{cart.length}</Quantiy> : ""}
          
        </CartButton>
      </Link>
    </CartButtonContainer>
  );
};
