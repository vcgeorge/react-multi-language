import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import HeaderItems from './headerItems';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Logo from 'images/logo.svg';
import { Link } from 'react-router-dom';



const Header = (props) => {
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        backgroundColor: 'rgb(250, 251, 251, 0.72)',
        boxShadow: 'none',
        backdropFilter: 'blur(6px)',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${props.drawerWidth}px)`,
            marginLeft: `${props.drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        ' @media(max-width: 991px)': {
            marginLeft: '0px!important',
        },
        ' @media(max-width: 767px)': {
            '& .LogoOuter': {
                display: 'none!important'
            }
        }

    }));

    return (
        <AppBar position="fixed" style={{ zIndex: '99999!important' }} open={props.open}>

            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item xs={6}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={props.handleDrawerOpen}
                                edge="start"
                                sx={{ color: '#212121', ...(props.open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link
                                to='/'
                                style={{
                                    display: 'inline-flex',
                                }}
                                className='LogoOuter'
                            >
                                <em className={'Logo'}>
                                    <img alt="Company Logo" src={Logo} />
                                </em>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ display: " flex", justifyContent: "flex-end" }}>
                        <HeaderItems />
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default Header
