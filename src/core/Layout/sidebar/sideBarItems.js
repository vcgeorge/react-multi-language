import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useLocation } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import TableRowsIcon from '@mui/icons-material/TableRows';
import LayersIcon from '@mui/icons-material/Layers';
import DangerousIcon from '@mui/icons-material/Dangerous';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SecurityIcon from '@mui/icons-material/Security';
import { styled } from '@mui/material/styles';

const allItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, location: '/dashboard' },
    {
        label: 'Pages', icon: <LayersIcon />, children: [
            { label: '404', icon: <DangerousIcon />, location: '/sdj2d,lwn dw' },
            { label: 'Wizaard', icon: <AutoFixHighIcon />, location: '/wizard' },
            { label: 'Users List', icon: <ListAltIcon />, location: '/userslist' },
            { label: 'My Profile', icon: <PersonIcon />, location: '/myprofile' },
        ]
    },
    {
        label: 'Components', icon: <SettingsInputComponentIcon />, children: [
            { label: 'BreadCrumbs', icon: <AccountTreeIcon />, location: '/level1' },
            { label: 'Table', icon: <TableRowsIcon />, location: '/tablepage' },
            { label: 'SnackBar', icon: <NotificationsIcon />, location: '/snackbar' },
        ]
    },
    {
        label: 'Auth', icon: <SecurityIcon />, children: [
            { label: 'Login', icon: <LoginIcon />, location: '/login' },

        ]
    },
]

const SideBarItems = (props) => {
    const [open, setOpen] = useState('');
    // const theme = useTheme();
    const location = useLocation()
    const handleClick = (index) => {
        open !== index ? setOpen(index) : setOpen('')
    };

    const Item = styled(ListItem)(({ theme }) => ({
        cursor: 'pointer',
        '&.Mui-selected': {
            color: `${theme.palette.active.green.main}`,
            '& .MuiListItemText-primary': {
                fontWeight: `${theme.typography.fontWeightMedium}`,
            },
            '& .MuiSvgIcon-root': {
                color: `${theme.palette.active.green.main}`
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                top: '0',
                bottom: '0',
                right: '0',
                width: '5px',
                background: `${theme.palette.active.green.main}`,
            },
        }
    }));
    const ChildItem = styled(ListItem)(({ theme }) => ({
        '&.Mui-selected': {
            backgroundColor: `${theme.palette.active.green.light}`,
            '& .MuiListItemText-primary': {
                fontWeight: `${theme.typography.fontWeightMedium}`,
                color: `${theme.palette.active.green.main}`
            },
            '& .MuiSvgIcon-root': {
                color: `${theme.palette.active.green.main}`
            },

        }
    }));


    return (
        <List>
            {allItems.map((el, index) => (
                el.children
                    ? <div key={index}>
                        <Item
                            onClick={() => handleClick(index)}
                            selected={location.pathname === el.location}
                        >
                            <ListItemIcon>
                                {el.icon}
                            </ListItemIcon>
                            <ListItemText primary={el.label} />
                            {(open === index || el.children.find(subel => subel.location === location.pathname))
                                ? <ExpandLess />
                                : <ExpandMore />}
                        </Item>

                        <Collapse in={open === index || el.children.find(subel => subel.location === location.pathname)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {el.children.map((subEl, i = index) => {
                                    return <ChildItem
                                        button
                                        sx={{ pl: 4 }}
                                        component={Link}
                                        to={subEl.location}
                                        key={i}
                                        selected={location.pathname === subEl.location}

                                    >
                                        <ListItemIcon>
                                            {subEl.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={subEl.label} />
                                    </ChildItem>
                                })}
                            </List>
                        </Collapse>
                    </div>
                    : <Item
                        button
                        component={Link}
                        to={el.location}
                        key={index}
                        selected={location.pathname === el.location}
                        onClick={() => handleClick(index)}
                    >
                        <ListItemIcon>
                            {el.icon}
                        </ListItemIcon>
                        <ListItemText primary={el.label} />
                    </Item>
            ))}
        </List >
    )
}

export default SideBarItems