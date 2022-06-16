import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      nsm:600,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    active: {
      green: {
        main: 'rgb(0, 171, 85)',
        light: 'rgba(63, 81, 181, 0.08)'
      },
    },

    text: {
      primary: '#212121',
      secondary: '#616161',
    },

    background: {
      default: 'rgb(250, 251, 251)'
    }
  },
  
  typography: {
    fontFamily: "Public Sans, sans-serif",
    fontWeight: '400',
    fontWeightLight: '100',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    fontWeightBold: '800'
  },
});

export default theme;
