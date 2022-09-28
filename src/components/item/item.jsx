import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemCount } from "../itemCount/itemCount";
import { AddToCartButton } from "./addToCartButton";

const ItemContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  border: solid 1px white;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  cursor: pointer;
  transition: all .5s;
  position: relative;
  &:hover {
    transform: scale(1.01);
  }
`;
const ItemTittle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
`;
const ItemImg = styled.div`
  background-image: url(${(props) => props.image});
  width: 50%;
  height: 10rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: .5rem;
`

export const Item = ({productName, image, price, stock, initial, id }) => {
  return (
    <ItemContainer>
      <ItemTittle>{productName}</ItemTittle>
      <ItemImg image={image}/>
      <p>${price}</p>
      <ItemCount stock={stock} initial={initial} route={`item/${id}`}/>
      <Link to={`/item/${id}`}>
        <AddToCartButton>
          Agregar al carrito
        </AddToCartButton>
      </Link>      
      <Link to={`/item/${id}`}>Detalles</Link>
    </ItemContainer>
  );
};
