import styled from "styled-components";
import { Item } from "../item/item";

const Container = styled.div`
  padding: 1rem;
  max-width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;
export const ItemList = ({products}) => {
  return (
    <Container>
      { products.map(function (product, index) {
        return (
          <Item
            productName={product.title}
            image={product.thumbnail}
            price={product.price}
            stock={product.available_quantity}
            initial={0}
            key= {index}
            id={product.id}
          />
        );
      })}
    </Container>
  );
};
