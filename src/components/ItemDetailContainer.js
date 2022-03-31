import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from './firebaseConfig.js'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    const getItem = () =>{
        
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

    }

    useEffect(() => {
        getItem()
    },[])

  return (
    <>
        {loading && "Cargando..."}
        <ItemDetail item={product}/>
                    
                
    </>
  )
}

export default ItemDetailContainer