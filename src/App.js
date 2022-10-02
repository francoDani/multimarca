import "./App.css";
import Navbar from "./components/NavBar/navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { CartProvider } from "./Context/CartContext";
import { LoginView } from "./components/login/loginPage";
import { LoginProvider } from "./Context/LoginContext";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <BrowserRouter>
            
            <Navbar />
            <Routes>            
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/login" element={<LoginView />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
