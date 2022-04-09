import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from './firebaseConfig.js'
import Loader from './Loader'
import 'animate.css';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const docRef = doc(db, "guitars", id);
        getDoc(docRef)
        .then((resp)=>{
          setProduct(resp.data())
        })
        .catch((err)=>{
          console.log(err);
        })
        .finally(()=>{
          setLoading(false);
        })
    }, [id])

  return (
    <>
        <div className='product-single__container'>
          {loading ? <Loader/> : <ItemDetail item={product}/>}
        </div>      
    </>
  )
}

export default ItemDetailContainer