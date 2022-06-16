import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom'
import layouts from "config/layouts";
import Header from './header/header';
import SideBar from './sidebar/SideBar';
import Main from './main/main';
import { DefaultLayout } from 'config/layouts/defaultLayout';
// import useMediaQuery from '@mui/material/useMediaQuery';
const drawerWidth = 240;

export default function Layout(props) {
  // const smallScreeneMatches = useMediaQuery('(max-width:991px)');
  const [open, setOpen] = React.useState(true);
  // React.useEffect(() => {
  //   if (smallScreeneMatches) {
  //     setOpen(false)
  //   } else {
  //     setOpen(true)
  //   }

  // }, [smallScreeneMatches])
  let location = useLocation()

  let currentLayout = DefaultLayout


  const path =
    location.pathname.lastIndexOf("/") === location.pathname.length - 1
      ? location.pathname.slice(0, location.pathname.length - 1)
      : location.pathname;

  layouts.forEach((layout) => {
    if (layout.route.path === path || path.includes(layout.route.path)) {
      currentLayout = layout.layout;
    }
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleDrawerOpen = useCallback(() => setOpen(true), []);
  // const handleDrawerClose = useCallback(() => setOpen(false), []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {currentLayout.header.display
        ? <Header drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen} />
        : ''}
      {currentLayout.sidebar.display
        ? <SideBar drawerWidth={drawerWidth} open={open} handleDrawerClose={handleDrawerClose} />
        : ''}
      <Main open={open} drawerWidth={drawerWidth}>{props.children}</Main>
    </Box>
  );
}
