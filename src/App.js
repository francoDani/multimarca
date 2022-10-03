import "./App.css";
import Navbar from "./components/NavBar/navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { CartProvider } from "./Context/CartContext";
import FinishBuyView from "./components/finishView/finishView";
import OrdersListContainer from "./components/orders/orderListContainer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/finish-buy" element={ <FinishBuyView /> } />
            <Route path="/orders" element={<OrdersListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
