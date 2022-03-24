import React, { createContext, useState } from 'react'

export const contexto = createContext();
const { Provider } = contexto;

export const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = ({id, title, price, pictureUrl}, quantity) =>{

      if(isInCart(id)){

          quantity = quantity+1

      }else{

        let carro = cart.slice(0);

        carro.push({id, title, price, pictureUrl, quantity});

        setCart(carro);

      }

    }

    const clear = () =>{

      setCart([]);

    }
    
    const isInCart = (id) =>{

      let flag =  false;

      const producto = cart.find(products => products.id === id);

      if(producto !== undefined){

        flag = true;

      }

      return flag;

    }

    const removeItem = (id) =>{

      let carro = cart.filter((item) => item.id !== id);

      setCart(carro);


    }

    const contextValue =  {

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
