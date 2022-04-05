import { Box, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { contexto } from './CartContext'
import { db } from './firebaseConfig';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const Cart = () => {

  const contextCart = useContext(contexto);
  const clear = contextCart.clear;
  const cart = contextCart.cart;
  const removeItem = contextCart.removeItem;
  const total = contextCart.total;
  const [registered, setRegistered] = useState(false);
  const [numberBuy, setNumberBuy] = useState();
  const [form, setForm] = useState({

    name: "",
    phone: "",
    email: ""

  });

  const { name, phone, email } = form;

  const handleInputChange = ({ target }) => {

    setForm({
      ...form,
      [target.name]: target.value

    })

  }

  const handleLogin = (e) => {

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

      })
      .catch((err) => {

        console.log(err);

      })

  }

  return (
    <div className='cart__container animate__animated animate__fadeIn'>{cart.length !== 0 ? cart.map(item => {

      return (<div key={item.item.id} className='cart__grid'>
        <img className='cart__img' src={item.item.pictureUrl} alt="product_image"></img>
        <p className='cart__title'>{item.item.title}</p>
        <p className='cart__price'>{"$" + item.item.price}</p>
        <p className='cart__cant'>U.{item.quantity}</p>
        <p className='cart__subtotal'>{"$" + item.item.price * item.quantity}</p>
        <Button variant='outlined' startIcon={<DeleteRoundedIcon />} onClick={() => { removeItem(item.item) }}>BORRAR</Button>
      </div>
      )


    }) : <><p className="cart-empty">Su carrito esta vacio.</p>
      <Box textAlign="center" margin={5}><Link className="cart-link" to="/">Volver al catalogo</Link></Box></>}

      {cart.length !== 0 && <><p className='cart__total'>TOTAL: {"$" + total}</p>
        <Box textAlign="right"><Button onClick={clear} variant="outlined"><span className='cart__clear'>LIMPIAR CARRITO</span></Button></Box>
        {registered ? <> {numberBuy === undefined && <><p className='cart__buy'>Registro exitoso, ya puede confirmar la compra!</p><Box textAlign={"center"}><Button variant='outlined' onClick={() => { handleConfirm(); clear(); }}>Confirmar compra</Button></Box></>}</> : <><p>Para confirmar la compra, debe dejar sus datos</p>
          <ValidatorForm className="form__contenedor" onSubmit={handleLogin}>
          <div className='form__div'>

          <TextValidator
                    label="Nombre"
                    onChange={handleInputChange}
                    name="name"
                    value={name}
                    validators={['required']}
                    errorMessages={['Este campo es obligatorio.']}
                    autoComplete="off"
                />


          </div>
          <div className='form__div'>
          <TextValidator
                    label="Telefono"
                    onChange={handleInputChange}
                    name="phone"
                    value={phone}
                    validators={['required', 'isNumber']}
                    errorMessages={['Este campo es obligatorio.', 'Debe ingresar un numero']}
                    autoComplete="off"
                />
            </div>
            <div className='form__div'>
            <TextValidator
                    label="Email"
                    onChange={handleInputChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Este campo es obligatorio.', 'Este email no es valido']}
                    autoComplete="off"
                />
            </div>
            <Box mt={3}>
            <Button type="submit" variant='outlined'>Registrarse</Button>
            </Box>
          </ValidatorForm></>}

        {numberBuy !== undefined && <p>Thanks for buy! Your buy tag is: {numberBuy}</p>}

      </>}



    </div>
  )
}

export default Cart