import { Box, Button, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { theme } from './Item'

const Banner = () => {
    const navigate = useNavigate();
    const onDetail = () => {
        navigate("/item/0a6LIk35zi2E89u1o3qu");
    }

    return (
        <div>
            <section className='banner'>
                <div className='banner__container animate__animated animate__fadeIn'>
                    <div className='banner__contenido'>
                        <h2 className='banner__title'>GIBSON LES PAUL</h2>
                        <p className='banner__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem accumsan, hendrerit purus sit amet, ornare dolor. Sed velit turpis, laoreet vitae vehicula et, egestas in nisl. Cras lacus ex, finibus vitae dui a.</p>
                        <ThemeProvider theme={theme}>
                            <Box>
                                <Button onClick={onDetail} variant='outlined' size='large' color='primary'><Link to={"/item/0a6LIk35zi2E89u1o3qu"} className='banner__link'>Ver producto</Link></Button>
                            </Box>
                        </ThemeProvider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner