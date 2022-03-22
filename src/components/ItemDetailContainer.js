import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {productsData} from '../data/products.js'
import ItemCount from './ItemCount.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [confirm, setConfirm] = useState(false)
    const productx = productsData.find(products => products.id === id);
    const getItem = () =>{
        setLoading(true)
        const promesa = new Promise((res,rej)=>{
  
            setTimeout(() => {
              res(productx)
            }, 2000);
    
        })
    
        promesa.then((resp)=>{
    
          setProduct(resp);
    
        })
        .catch((rej)=>{
    
          console.log('error')
    
        })
        .finally(()=>{

          setLoading(false)

        })

        return promesa;

    }

    const onAdd = (count) =>{

      if(count != undefined){

        setConfirm(true);

      }

    }

    useEffect(() => {
        getItem()
    },[])

  return (
    <>
        {loading && "Cargando..."}
        {confirm ? <><ItemDetail item={product}/>
                    <Link to="/cart">Terminar compra</Link></> 
                : <><ItemDetail item={product}/>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/></>}
    </>
  )
}

export default ItemDetailContainer