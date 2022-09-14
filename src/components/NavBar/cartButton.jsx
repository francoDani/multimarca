import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



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
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    font-size: .8rem;
    margin-right: 1rem;    
`;

export const CartWidwet = () => {
  return (
    <CartButtonContainer>
      <CartButton>
      <FontAwesomeIconStyled icon={faCartShopping} />
        Cart
      </CartButton>
    </CartButtonContainer>
  );
};
