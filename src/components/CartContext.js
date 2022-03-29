import React, { createContext, useState } from 'react'

export const contexto = createContext();
const { Provider } = contexto;

export const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantTotal, setCantTotal] = useState(0);

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

    setTotal(total+(item.price * quantity));

    setCantTotal(cantTotal+quantity);

    setCart(cartAux);

  }

  console.log(cantTotal);

  const clear = () => {

    setCart([]);
    setTotal(0);
    setCantTotal(0);

  }

  const isInCart = (id) => {

    let flag = false;

    const producto = cart.find(item => item.item.id === id);

    if (producto !== undefined) {

      flag = true;

    }

    return flag;

  }

  const removeItem = (item) => {

    const producto = cart.find(product => product.item === item)

    setTotal(total-(producto.item.price * producto.quantity));

    setCantTotal(cantTotal-producto.quantity);

    let carro = cart.filter((product) => product.item.id !== item.id);

    setCart(carro);


  }

  const contextValue = {

    cart: cart,
    total: total,
    cantTotal: cantTotal,
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
