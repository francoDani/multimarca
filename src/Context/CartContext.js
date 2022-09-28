import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOn, setIsOn] = useState();
  const [totalShop, setTotalShop] = useState(0);
  const removeAll = () => {
    setCart([]);
    check();
    setTotalShop(0)
  }
  const check = () => {
    if(cart.length === 0) {
      setIsOn(false);
    }else{setIsOn(true);}
  }
  const deleteThis = (id, price) => {
    /* const indexOf = cart.findIndex(element => {
        return element.id === id;
    })       */
    let filter = cart.filter(e=> e.id !== id);
    filter.forEach(f => cart.splice(cart.findIndex(e => e.id === f.id),1));
    setTotalShop(totalShop - price)
    setCart(filter);
    check();    
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
  const addItem = (item, quantity, id, price, image) => {
    let result = cart.findIndex(products => products.id==id);
    if(result === -1){
      let newProduct = {
        name: item,
        price: price,
        quantity: quantity,
        image: image,
        id: id,
        total: price * quantity
      };
      let calc = price * quantity;
      let carrito = cart;
      carrito.push(newProduct);
      carrito = isReapeated(carrito);    
      setCart(carrito);
      setTotalShop(totalShop + calc)
    }else {
      let newCart = cart;
      newCart[result].quantity = newCart[result].quantity + quantity;
      newCart[result].total = newCart[result].quantity * price;
      setCart(newCart);
      let asd = 0;
      cart.map((prod) => {
        let actual = prod.total;
        asd = asd + actual;
      })
      setTotalShop(+(asd))
    }
    
  };
  useEffect(() => {
    check()
  },[cart])

  return (
    <CartContext.Provider value={{ addItem, cart, deleteThis, removeAll, isOn, totalShop }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
