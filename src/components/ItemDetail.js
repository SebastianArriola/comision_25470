import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { addItemStore } from '../cart/cartSlice';
import { contexto } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const contextCart = useContext(contexto);
  const addItem = contextCart.addItem;
  const dispatch = useDispatch()
  const onAdd = (count) => {
    addItem(item, count);
    let aMandar = {

      item: item,
      quantity: count

    }
    dispatch(addItemStore(aMandar));
    console.log("CUENTOO",count)
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className='product-single__title'>{item.title}</h2>
      <div className='product-single__grid'>
        <img className="product-single__img" src={item.pictureUrl} alt="product_image"></img>
        <div className='product-single__contenido'>
          <p className='product-single__description'>{item.description}</p>
          <p className='product-single__price'>{"$" + item.price}</p>
          <p className='product-single__stock'><span className='product-single__stock-span'>EN STOCK</span></p>
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail