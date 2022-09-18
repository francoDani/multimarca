import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeAll = () => {
    setCart([]);
  }

  const deleteThis = (id) => {    
    const indexOf = cart.findIndex(element => {
        return element.id === id;
    })
    cart.splice(indexOf, 1);    
    setCart(cart);
  }

  /**
   *
   * @param {array} arr you'll recive the array to filter the repeated elements before set the new value in cart
   * @returns
   */
  const isReapeated = (arr) => {
    let result = arr.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.place === value.place && t.name === value.name)
    );
    return result;
  };

  /**
   *        
   * @param {string} item this vale is the name of the product
   * @param {number} quantity this is the quantity o the product you want to add to the cart
   */
  const addItem = (item, quantity, id, price, img) => {
    let newProduct = {
      name: item,
      price: price,
      quantity: quantity,
      img: img,
      id: id
    };
    let carrito = cart;
    carrito.push(newProduct);
    carrito = isReapeated(carrito);
    console.log(carrito);
    setCart(carrito);    
  };

  return (
    <CartContext.Provider value={{ addItem, cart, deleteThis, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
