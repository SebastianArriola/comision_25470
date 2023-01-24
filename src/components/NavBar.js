import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo1.png'
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Box, MenuItem} from '@material-ui/core';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@mui/material/Menu'
import { useState } from 'react';


export const pages = ['Electricas', 'Acusticas', 'Clasicas'];

const NavBar = () => {

    // const cantTotal = useSelector((state) => state.cart.cantTotal)
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElNav2, setAnchorElNav2] = useState(null)
    const handleCloseNavMenu = () => {

        setAnchorElNav(null)

    }
    const handleOpenNavMenu = (event) => {

        setAnchorElNav(event.currentTarget);

    }
    const handleCloseNavMenu2 = () => {

        setAnchorElNav2(null)

    }
    const handleOpenNavMenu2 = (event) => {
        console.log("first")
        setAnchorElNav2(event.currentTarget);

    }
    const navigate = useNavigate();
    const toCart = () => {

        navigate("/cart")

    }
    const toInicio = () =>{

        navigate("/")

    }

    return (

        <AppBar position="static" color='inherit'>
            <Toolbar >
            {/* <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
                    

                        <Button onClick={() => toCategory()}
                            sx={{ my: 2, color: 'white', display: 'block'}}><span style={{fontSize:17, textAlign: "center"}}>p</span></Button>

                    

                </Box> */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                        
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2}}
                        
                    onClick={handleOpenNavMenu2}><Typography color="black" fontSize={13}>CATEGORIAS</Typography></IconButton>
                <Menu id="menu-appbar" anchorEl={anchorElNav2} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                        open={Boolean(anchorElNav2)} onClose={handleCloseNavMenu2} sx={{ display: { xs: 'none', md: 'block' } }}>
                        {pages.map((page, index) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu2}>
                                <Typography textAlign="center" component='a' href={`/category/${index + 1}`} sx={{ textDecoration: 'none', color: 'inherit', fontSize: 13 }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{mr: 2,
                        display: { xs: 'none', md: 'block' },
                        
                        flexGrow:1,
                        
                        
                        color: 'black',
                        textDecoration: 'none'}}
                        onClick={toInicio}>
                <img src={logo} alt="logo"/>
                </Box> 
                
                <Box sx={{ flexGrow: 1, display: { sx: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2}}
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                        open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                        {pages.map((page, index) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" component='a' href={`/category/${index + 1}`} sx={{ textDecoration: 'none', color: 'inherit', fontSize: 15 }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                </Box>
                <Box sx={{mr: 2,
                        display: { xs: 'block', md: 'none' },
                        
                        flexGrow:1,
                        
                        
                        color: 'black',
                        textDecoration: 'none'}}
                        onClick={toInicio}>
                <img src={logo} alt="logo"/>
                </Box> 


                
                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <ShoppingCartIcon onClick={toCart} />

                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <ShoppingCartIcon onClick={toCart} style={{width: "4rem", color: "black"}}/>

                </Box>
            </Toolbar>
        </AppBar>


    );
};
export default NavBar;