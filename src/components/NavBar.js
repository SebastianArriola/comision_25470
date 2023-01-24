import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo1.png'
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { contexto } from './CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const pages = ['Electricas', 'Acusticas', 'Clasicas'];

const NavBar = () => {

    const cantTotal = useSelector((state) => state.cart.cantTotal)

    return (
        <>
            <header className='header'>
                <div className='header__container'>
                     <div className='header__barra animate__animated animate__fadeIn'> 
                    <nav className='navegacion'>
                            <Link to="/" className='navegacion__enlace navegacion__inicio'>inicio</Link>
                            <Link to={"category/1"} className='navegacion__enlace'>{pages[0]}</Link>
                            <Link to="/"><img className='img__logo' src={logo} alt="logo_img"/></Link>
                            <Link to={"category/2"} className='navegacion__enlace'>{pages[1]}</Link>
                            <Link to={"category/3"} className='navegacion__enlace'>{pages[2]}</Link>
                            
                            
                    </nav>
                    <Link to={"/cart"} className='cart__link'><ShoppingCartIcon />{cantTotal !== 0 && <span className="cart__cantTotal">{cantTotal}</span>}</Link>
  
                        
                        
                    </div> 
                    
                </div>
            </header>
        </>
    );
};
export default NavBar;