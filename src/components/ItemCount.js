import { Button } from '@material-ui/core'
import React, { useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(1);
    let stockAvailable = true;

    const stock = 5;

    const onAdd = () =>{

        setCount(count+1);

    }
    
    const onDec = () =>{

        if(count>0) {

            setCount(count-1);

        }
        

    }

    const stockAvailableRevision = () =>{

        if(count>=stock){

            stockAvailable = false;

        }else{

            stockAvailable = true;

        }

        return stockAvailable

    }
    if(stockAvailableRevision(count)){

        return (<div>

            <Button onClick={onDec}variant="contained" component="span">
                -
            </Button>
            <label>{count}</label>
            <Button onClick={onAdd} variant="contained" component="span">
                +
            </Button>

        </div>)

    }else{
        return(<div>

            <Button onClick={onDec}variant="contained" component="span">
                -
            </Button>
            <label>{count}</label>
            <Button onClick={onAdd} variant="contained" disabled>
                +
            </Button>

        </div>)
        

    }
}

export default ItemCount