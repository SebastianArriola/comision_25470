import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from './NavBar'

const Footer = () => {
    return (
        <div className='footer__container animate__animated animate__fadeIn'>
            <div className='footer__contenido'>

                <nav className='footer__navegacion'>

                    <Link to="/" className='footer__enlace'>inicio</Link>

                    {pages.map((page, index) => {

                        return <Link key={index} to={"category/" + (index + 1)} className='footer__enlace'>{page}</Link>

                    })}

                </nav>

                <p className='footer__name'>© SebastianArriola</p>



            </div>
        </div>
    )
}

export default Footer