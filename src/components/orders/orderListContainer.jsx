import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../Context/CartContext";
import { Button } from "../button/button";

const OrderInfoContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`;
const OrderInfo = styled.div`
width: 60%;
background-color: var(--white);
box-shadow: 0 0 10px var(--light-gray);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const OrdersListContainer = () => {
    const { orderId, order, totalShop } =
    useContext(CartContext);
    
  return (
    <OrderInfoContainer>
      {!order ? (
        console.log(order)
      ) : (
        <OrderInfo>
          <h3>Id de tu orden: {!orderId ? "" : orderId} </h3>
          <h3>Productos en tu orden</h3>
          <ol>
            {order.items.map(function (product, index) {
              return (
                <li key={index}>
                  {product.name}: ${product.price}
                </li>
              );
            })}
          </ol>
          <p>Total: {totalShop}</p>
        </OrderInfo>
      )}
      <Link to={"/"}><Button>Volver al menu</Button></Link>
    </OrderInfoContainer>
  );
};

export default OrdersListContainer;
