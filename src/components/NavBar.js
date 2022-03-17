import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';


const pages = ['Electric', 'Acoustic', 'Classical'];

const NavBar = () => {

    

    return (
        <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: -10, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">Guitars</Link>
                    </Typography>
                    <Box sx={{ ml: 140, flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={"category/"+(index+1)}>{page}</Link>
                            </Button>
                        ))}
                    </Box >
                    <CardWidget/>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
};
export default NavBar;