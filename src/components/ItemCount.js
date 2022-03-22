import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

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

        onAdd(count)

    }
    
        return(<div>

            <Button onClick={handleDec}variant="contained" component="span">
                -
            </Button>
            <label>{count}</label>
            <Button onClick={handleInc} variant="contained" component="span">
                +
            </Button>
            <Box mt={1} ml={2}>
            <Button onClick={handleConfirm} variant="contained" component="span">
                Confirm
            </Button>
            </Box>
            

        </div>)
        


}

export default ItemCount