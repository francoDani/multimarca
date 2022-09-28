import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "./emptyCart";
import { Link } from "react-router-dom";
import FinishBuy from "../finishBuy/finishBuy";

const CartBox = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3px;
  margin-top: 2rem;
  box-shadow: 0 0 10px var(--light-gray);
  margin-bottom:5rem;
`;
const Tabs = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 0 0 5rem;
  border: none;
  border-bottom: 1px solid var(--light-gray);
`;
const TabsBtns = styled.button`
  padding: 0 1rem 1.2rem 1rem;
  width: 8rem;
  margin-right: 1rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-bottom: solid 3px var(--blue);
`;
const ProductTable = styled.table`
  width: 100%;
`;
const ItemImg = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const CartListing = styled.div``;

const ItemName = styled.h1`
  font-size: 0.8rem;
  font-weight: lighter;
  display: inline;
`;
const TD = styled.td`
  width: 20%;
`;

const DeleteBtn = styled.button`
  border: none;
  width: 100%;
  cursor: pointer;
`;
const DeleteAll = styled.button`
  margin: 1rem;
  padding: .5rem;
  border-radius: 5px;
  border: 1px solid var(--light-red);
  color: var(--light-red);
  font-weight: bold;
  background-color: var(--white);
  transition: .5s;
  cursor: pointer;
  &:hover{
    background-color: var(--light-red);
    color: white;
  }
`
const GoToShop = styled.button`
  margin: 1rem;
  padding: .5rem;
  border-radius: 5px;
  border: 1px solid var(--light-green);
  color: var(--light-green);
  font-weight: bold;
  background-color: var(--white);
  transition: .5s;
  cursor: pointer;
  &:hover{
    background-color: var(--light-green);
    color: white;
  }
`

const ItemCartContainer = () => {
  const { cart, deleteThis, removeAll, isOn } = useContext(CartContext);

  return (
    <CartBox>
      <Tabs>
        <TabsBtns>Cart</TabsBtns>
        <TabsBtns>Favoritos</TabsBtns>
      </Tabs>
      <CartListing>
        {isOn ? (
          <ProductTable>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {cart.map(function (product, index) {
                return (
                  <tr key={index}>
                    <TD>
                      <ItemImg image={product.image} />                      
                    </TD>
                    <TD>
                      <ItemName>{product.name}</ItemName>
                    </TD>
                    <TD>{product.quantity}</TD>
                    <TD>{product.price}</TD>
                    <TD>{product.total}</TD>
                    <TD>
                      <DeleteBtn
                        onClick={() => {
                          deleteThis(product.id, product.total);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </DeleteBtn>
                    </TD>
                  </tr>
                );
              })}
            </tbody>
          </ProductTable>
        ) : (
          <EmptyCart />
        )}
        {isOn ? <DeleteAll onClick={removeAll}>Borrar todo</DeleteAll> : <Link to= "/"><GoToShop>Ir a comprar</GoToShop></Link>}
      </CartListing>
      {isOn ? <FinishBuy /> : ""}
      
    </CartBox>
  );
};

export default ItemCartContainer;
