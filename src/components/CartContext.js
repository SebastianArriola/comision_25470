import React, { createContext, useState } from 'react'

export const contexto = createContext();
const { Provider } = contexto;

export const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    let cartProduct = { item, quantity };

    let cartAux = [];

    if (!isInCart(item.id)) {

      cartAux = [cartProduct, ...cart];

    }else{

      cartProduct = cart.find(producto => producto.item.id === item.id);

      cartProduct.quantity =  cartProduct.quantity + quantity;

      cartAux = [...cart];

    }

    setCart(cartAux);

  }

  const clear = () => {

    setCart([]);

  }

  const isInCart = (id) => {

    let flag = false;

    const producto = cart.find(item => item.item.id === id);

    if (producto !== undefined) {

      flag = true;

    }

    return flag;

  }

  const removeItem = (id) => {

    let carro = cart.filter((item) => item.item.id !== id);

    setCart(carro);


  }

  const contextValue = {

    cart: cart,
    addItem: addItem,
    clear: clear,
    removeItem: removeItem

  }

  return (
    <>
      <Provider value={contextValue}>
        {children}
      </Provider>
    </>
  )
}
