import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { Provider } from 'react-redux'
import { store } from "./store/store";

function App() {
  return (
    
      <Provider store={store}>

      
      <BrowserRouter>
        <NavBar className="header__container" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
      </Provider>
    

  );
}

export default App;
