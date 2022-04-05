import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);
    const [confirm, setConfirm] = useState(false);

    const handleInc = () => {
        if (count < stock) {

            setCount(count + 1)

        }

    }

    const handleDec = () => {

        if (count > initial) {

            setCount(count - 1);

        }


    }

    const handleConfirm = () => {

        setConfirm(true);
        onAdd(count)

    }

    return (<>
        {!confirm ? <div className='count__container'><div className="product-single__count">

            <Button onClick={handleDec} variant="outlined" >
                -
            </Button>
            <label className='count__label'>{count}</label>
            <Button onClick={handleInc} variant="outlined">
                +
            </Button>


        </div>
            <div className="product-single__confirm">

                <Button onClick={handleConfirm} variant="outlined" size="large">
                    <span className="count_addcart">agregar al carrito</span>
                </Button>

                

            </div>

        </div> : <Box textAlign='center'><Link to="/cart" className='count__buyconfirm'>Terminar compra</Link></Box>}


    </>
    )



}

export default ItemCount