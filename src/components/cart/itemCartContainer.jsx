import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartBox = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3px;
  margin-top: 2rem;
  box-shadow: 0 0 10px var(--light-gray);
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
  width: 75px;
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

const ItemCartContainer = () => {
  const { cart, deleteThis, removeAll } = useContext(CartContext);
  const [onCar, setOncar] = useState();
  const onCart = (item) => {
    if (item === []) {
      setOncar(false);
    } else {
      setOncar(true);
    }
  };

  const DeleteBtn = styled.button`
    border: none;
    width: 100%;
    cursor: pointer;
  `;

  useEffect(() => {
    onCart(cart);
  }, [cart]);
  return (
    <CartBox>
      <Tabs>
        <TabsBtns>Cart</TabsBtns>
        <TabsBtns>Favoritos</TabsBtns>
      </Tabs>
      <CartListing>
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
            {onCar ? cart.map(function (product, index) {
              return (
                <tr>
                  <TD>
                    <ItemImg image={product.img} />
                  </TD>
                  <TD>
                    <ItemName>{product.name}</ItemName>
                  </TD>
                  <TD>{product.quantity}</TD>
                  <TD>{product.price}</TD>
                  <TD>{product.quantity * product.price}</TD>
                  <TD>
                    <DeleteBtn onClick={()=>{
                      deleteThis(product.id)  
                    }}>
                      <FontAwesomeIcon icon={faTrash} />
                    </DeleteBtn>
                  </TD>
                </tr>
              );
            }) : <h1>No tienes nada en tu carrito</h1>}
          </tbody>
        </ProductTable>
        <button onClick={()=>{
            removeAll();
        }}>Borrar todo</button>
      </CartListing>
    </CartBox>
  );
};

export default ItemCartContainer;
