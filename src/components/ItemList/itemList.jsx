import { useEffect, useState } from "react";
import styled from "styled-components";
import { Item } from "../item/item";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
`;
export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=guitarra+fender"
      );
      const data = await response.json();
      setProducts(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      {products.map(function (product, index) {
        return (
          <Item
            productName={product.title}
            image={product.thumbnail}
            price={product.price}
            stock={product.available_quantity}
            initial={0}
            key= {index}
          />
        );
      })}
    </Container>
  );
};
