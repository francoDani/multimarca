import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemCount } from "../itemCount/itemCount";
import { AddToCartButton } from "../item/addToCartButton";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ItemDetailSection = styled.div`
  width: 90vw;
  min-height: 70vh;
  padding: 0 1rem 0 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const ItemImg = styled.div`
  background-image: url(${(props) => props.image});
  width: 40%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const DescriptionContainer = styled.div`
  width: 30%;
  min-height: 500px;
  border: 1px solid #777777;
  border-radius: 5px;
`;
const ProductName = styled.h1`
  font-size: 1.1rem;
  text-align: left;
  margin: 0.3rem;
  font-weight: 500;
`;
const ConditionStock = styled.p`
  font-size: 0.7rem;
  text-align: left;
  margin: 0.5rem 0 0 0.3rem;
  color: #777777;
`;
const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 0.3rem;
`;
const ProductDescription = styled.p`
  font-size: 0.8rem;
  padding: 3rem 0.5rem 0.2rem 0.45em;
  text-align: justify;
  margin-bottom: 1rem;
  max-height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const BackButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--dark-gray);
`;
const LoaderItem = styled.span`
  width: 38px;
  height: 38px;
  display: inline-block;
  position: relative;
&::after,
&::before {
  content: '';  
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--blue);
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}
&::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
`

export const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);
  const onAdd = (val) => {
    setQuantity(val);
  };
  return (
    <ItemDetailSection>
      <Link to={"/"}>
        <BackButton>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </BackButton>
      </Link>
      {!product.image ? <LoaderItem /> : <ItemImg image={product.image} />}      
      <DescriptionContainer>
        <ConditionStock>
          Estado {product.condition} | Vendidos {product.sold_quantity}
        </ConditionStock>
        {!product.title ? <LoaderItem /> : <ProductName>{product.title}</ProductName>}        
        <ProductPrice>$ {product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <ItemCount initial={quantity} stock={product.stock} value={onAdd} />
        {quantity === 0 ? (
          <></>
        ) : (
          <Link to={"/" + "cart"}>
            <AddToCartButton
              onClick={() => {
                addItem(
                  product.title,
                  quantity,
                  product.id,
                  product.price,
                  product.image
                );
              }}
            >
              Terminar mi compra
            </AddToCartButton>
          </Link>
        )}

        <ConditionStock>Stock disponible: {product.stock}</ConditionStock>
      </DescriptionContainer>
    </ItemDetailSection>
  );
};
