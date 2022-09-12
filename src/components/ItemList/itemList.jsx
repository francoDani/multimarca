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
export const ItemList = ({category}) => {
  const [products, setProducts] = useState([]);
  const [searchCategory, setSearchCategory] = useState();  

  const setCategory = (category) => {
    switch (category) {
      case "classical":
        setSearchCategory(`guitarra+gracia+clasica`);
        break;
      case "acustic":
        setSearchCategory(`guitarra+gracia+acustica`);
        break;
      case "electric":
        setSearchCategory(`guitarra+electrica+fender`);
        break;
      case "ukelele":
        setSearchCategory(`ukelele`);
        break;
      default:
        setSearchCategory(`guitarra+gracia`);
        break;
    }
  }
  const getProducts = async () => {
    setCategory(category);
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchCategory}`
      );
      const data = await response.json();
      setProducts(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
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
