import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import SideBarItems from './sideBarItems';

const SideBar = (props) => {
    const theme = useTheme();
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const drawerCss = {
        width: props.drawerWidth,
        flexShrink: 0,
        
        '& .MuiDrawer-paper': {
            width: props.drawerWidth,
            boxSizing: 'border-box',
        },
        ' @media(max-width: 991px)': {
            position: 'fixed',
            zIndex: 9999,
        }
    }
    return (
        <Drawer
            sx={drawerCss}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <SideBarItems />
        </Drawer>
    )
}

export default SideBar
