import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { contexto } from './CartContext'
import { db } from './firebaseConfig';

const Cart = () => {

  const contextCart = useContext(contexto);
  const clear = contextCart.clear;
  const cart = contextCart.cart;
  const removeItem = contextCart.removeItem;
  const total = contextCart.total;
  const [registered, setRegistered] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [numberBuy, setNumberBuy] = useState();
  const [form, setForm] = useState({

    name: "",
    phone: "",
    email: ""

  });

  const { name, phone, email } = form;

  const handleInputChange = ({target}) =>{

    setForm({
        ...form,
        [target.name]: target.value

    })

}

  const handleLogin = (e) =>{

    e.preventDefault();
    setRegistered(true);

  }

  const handleConfirm = () => {

    let order = {
      buyer: form,

      items: cart,
      date: serverTimestamp(),
      total: total

    }

    const ordersCollection = collection(db, "orders");
    const qorder = addDoc(ordersCollection, order);

    qorder
      .then((resp) => {

        setNumberBuy(resp.id);
        setConfirm(true);

      })
      .catch((err) => {

        console.log(err);

      })

  }

  return (
    <div>{cart.length !== 0 ? cart.map(item => {

      return (<div key={item.item.id}><p>{item.item.title}</p>
        <p>PRECIO: {item.item.price}</p>
        <img src={item.item.pictureUrl}></img>
        <p>CANTIDAD: {item.quantity}</p>
        <p>SUBTOTAL: {item.item.price * item.quantity}</p>
        <Button onClick={() => { removeItem(item.item) }}>borrar</Button>
      </div>
      )


    }) : <><p>Su carrito esta vacio.</p>
      <Link to="/">Volver al catalogo</Link></>}

      {cart.length !== 0 && <><p>TOTAL: {total}</p>
        <Button onClick={clear}>LIMPIAR CARRITO</Button>
        {registered ? <> {numberBuy === undefined && <><p>Registro exitoso, ya puede confirmar la compra!</p><Button onClick={()=>{handleConfirm(); clear();}}>Confirmar compra</Button></>}</>: <><p>Para confirmar la compra, debe dejar sus datos</p>
        <form onSubmit={handleLogin}>

          <input type="text" placeholder='Name' name="name" value={name} onChange={handleInputChange} autoComplete='off' />
          <input type="number" placeholder='Phone' name="phone" value={phone} onChange={handleInputChange} autoComplete='off' />
          <input type="text" placeholder='Email' name="email" value={email} onChange={handleInputChange} autoComplete='off' />
          <button type="submit" >Login</button>

        </form></>}
        
        {numberBuy !== undefined && <p>Thanks for buy! Your buy tag is: {numberBuy}</p> }

      </>}




    </div>
  )
}

export default Cart