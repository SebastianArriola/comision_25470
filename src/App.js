import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CartContext>

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer greeting="Guitarras" />} />
          <Route path="category/:id" element={<ItemListContainer greeting="Guitarras" />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>

    </CartContext>

  );
}

export default App;
