import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [confirm, setConfirm] = useState(false);

    const handleInc = () =>{
        if(count<stock){

            setCount(count+1)

        }

    }
    
    const handleDec = () =>{
        
        if(count>initial) {

            setCount(count-1);
           
        }
        

    }

    const handleConfirm = () =>{

        setConfirm(true);
        onAdd(count)

    }
    
        return(<>
            {!confirm ? <div>

                <Button onClick={handleDec}variant="contained" component="span">
                    -
                </Button>
                <label>{count}</label>
                <Button onClick={handleInc} variant="contained" component="span">
                    +
                </Button>
                <Box mt={1} ml={2}>
                <Button onClick={handleConfirm} variant="contained" component="span">
                    Agregar al carrito
                </Button>
                </Box></div> : <Link to="/cart">Terminar compra</Link>}
            
            
                </>
        )
        


}

export default ItemCount