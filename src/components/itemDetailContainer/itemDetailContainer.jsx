import { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemDetail } from "../itemDetail/itemDetail";

export const ItemDetailbox = styled.div`
  position: absolute;
  background-color: #ededed;
  padding-top: 5rem;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemDetailContainer = () => {
  let itemsearch = "fender";
  const [product, setproduct] = useState([]);
  const [itemID, setItemID] = useState();
  const [productDetail, setPorductDetail] = useState();
  const getItem = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + itemsearch
      );
      const data = await response.json();
      setproduct(data.results[0]);
      setItemID(product.id);
    } catch (e) {
      console.log(e);
    }
  };
  const getDescription = async () => {
    try {
      const response = await fetch(
        `https://api.mercadolibre.com/items/${itemID}/description`
      );
      const data = await response.json();
      setPorductDetail(data.plain_text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
    getDescription();
  }, []);
  return (
    <ItemDetailbox>
      <ItemDetail product={product} productDetail={productDetail} />
    </ItemDetailbox>
  );
};
