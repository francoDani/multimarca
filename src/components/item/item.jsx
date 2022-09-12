import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ItemCount } from "../itemCount/itemCount";

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
  background-size: cover;
  background-position: center;
  margin: .5rem;
`
const Details = styled.a`
  border: solid 1px gray;
  border-radius: 5px;
  padding: 0 .5rem;
  text-decoration: none;
  color: black;
`
const Navigation = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 10;
`

export const Item = ({productName, image, price, stock, initial, id }) => {
  return (
    <ItemContainer>
      <Navigation href={`/item/${id}`}/>
      <ItemTittle>{productName}</ItemTittle>
      <ItemImg image={image}/>
      <p>${price}</p>
      <ItemCount stock={stock} initial={initial}/>
      <Details href={`/item/${id}`}>Detalles</Details>  
    </ItemContainer>
  );
};
