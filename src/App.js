import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CartContext>

      <BrowserRouter>
        <NavBar className="header__container"/>
        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />

        </Routes>

        <Footer/>
      </BrowserRouter>
    </CartContext>

  );
}

export default App;
