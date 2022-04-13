import { Button, ThemeProvider, Box } from '@material-ui/core';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e99401',
    }
  }
});

const Item = ({ products }) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate("/item/" + product.id);
  }
  const { product } = products;

  return (
    <div className='product animate__animated animate__fadeIn'>
      <img className='product__image' src={product.pictureUrl} alt="product_image"></img>
      <div className='product__data'>
        <p className='product__name'>{product.title}</p>
        <p className='product__description'>{product.description}</p>
        <p className='product__price'>{"$" + product.price}</p>
        <ThemeProvider theme={theme}>
          <Box textAlign='center' marginBottom={3}>
            <Button className='product__button' onClick={onDetail} variant='outlined' size='large' color='primary'><Link to={"/item/" + product.id} className='product__link'>Ver producto</Link></Button>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Item