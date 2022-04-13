import { Box, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { contexto } from './CartContext'
import { db } from './firebaseConfig';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { toast } from 'react-toastify';

const Cart = () => {

  const contextCart = useContext(contexto);
  const clear = contextCart.clear;
  const cart = contextCart.cart;
  const removeItem = contextCart.removeItem;
  const total = contextCart.total;
  const editCart = contextCart.editCart;
  const [count, setCount] = useState(1)
  const [edit, setEdit] = useState(new Array(cart.length));
  const [registered, setRegistered] = useState(false);
  const [numberBuy, setNumberBuy] = useState();
  const [form, setForm] = useState({

    name: "",
    phone: "",
    email: "",
    repeatEmail: ""

  });

  const { name, phone, email, repeatEmail } = form;

  const handleInputChange = ({ target }) => {

    setForm({
      ...form,
      [target.name]: target.value
    })

  }

  const handleLogin = (e) => {
    e.preventDefault();
    setRegistered(true);
    toast.success("Registro exitoso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  }

  const handleInc = (stock) => {
    setCount(count + 1)
  }

  const handleDec = (stock) => {
    setCount(count - 1);
  }

  const handleEdit = (i, quantity) => {
    setCount(quantity);
    let aux = [...edit];
    aux[i] = true;
    setEdit(aux);
  }

  const updateCart = (item, quantity, i) => {
    let aux = [...edit];
    aux[i] = false;
    editCart(item, quantity);
    setEdit(aux);
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

    toast.success("Compra exitosa", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  

  }
  ValidatorForm.addValidationRule('isEmailMatch', (value) => {
    if (value !== email) {
        return false;
    }
    return true;
});


  return (
    <div className='cart__container animate__animated animate__fadeIn'>{cart.length !== 0 ? cart.map((item, i) => {
      return (<div key={item.item.id} className='cart__grid'>
        <img className='cart__img' src={item.item.pictureUrl} alt="product_image"></img>
        <p className='cart__title'>{item.item.title}</p>
        <p className='cart__price'>{"$" + item.item.price}</p>
        <p className='cart__cant'>U.{item.quantity}</p>
        <p className='cart__subtotal'>{"$" + item.item.price * item.quantity}</p>
        {!edit[i] ? <Button onClick={() => handleEdit(i, item.quantity)} size="small"><EditIcon /></Button> : <div className="count__edit__grid"><Button onClick={handleDec}>-</Button><span>{count}</span><Button onClick={handleInc}>+</Button><Button className='check__center' onClick={() => { updateCart(item.item, count, i) }}><CheckIcon /></Button></div>}
        <Button style={{ maxWidth: '10rem', minWidth: '4rem', textAlign: "left" }} onClick={() => { removeItem(item.item) }}><DeleteRoundedIcon /></Button>
      </div>
      )


    }) : <>{numberBuy === undefined ? <><p className="cart-empty">Su carrito esta vacio.</p>
      <Box textAlign="center" margin={5}><Link className="cart-link" to="/">Volver al catalogo</Link></Box></> : <><p className="cart-empty">Su compra fue realizada, numero de compra: {numberBuy}.</p>
      <Box textAlign="center" margin={5}><Link className="cart-link" to="/">Volver al catalogo</Link></Box></>}</>}

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
                className="form__field"
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
                className="form__field"
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
                className="form__field"
                validators={['required', 'isEmail']}
                errorMessages={['Este campo es obligatorio.', 'Este email no es valido']}
                autoComplete="off"
              />
            </div>
            <div className='form__div'>
              <TextValidator
                label="Email confirm"
                onChange={handleInputChange}
                name="repeatEmail"
                value={repeatEmail}
                className="form__field"
                validators={['required', 'isEmail', 'isEmailMatch']}
                errorMessages={['Este campo es obligatorio.', 'Este email no es valido', 'Ambos mail deben ser iguales']}
                autoComplete="off"
              />
            </div>
            <Box mt={3}>
              <Button type="submit" variant='outlined'>Registrarse</Button>
            </Box>
          </ValidatorForm></>}
      </>}
    </div>
  )
}

export default Cart