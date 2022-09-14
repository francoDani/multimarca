import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [imgURL, setImgURL] = useState();

  const [productDetail, setPorductDetail] = useState("");
  const getItem = async () => {
    try {
      const response = await fetch(
        "https://api.mercadolibre.com/items/" + id
      );
      const data = await response.json();
      setproduct(data);
      setImgURL(data.pictures[0].url)
      const detailResponse = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      const detailData = await detailResponse.json();
      setPorductDetail(detailData.plain_text);
    } catch (e) {
      console.log("e");
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  return (
    <ItemDetailbox>
      <ItemDetail product={product} productDetail={productDetail} img={imgURL}/>
    </ItemDetailbox>
  );
};
