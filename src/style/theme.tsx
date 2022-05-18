import { createTheme } from '@mui/material/styles';
import { COLORS } from './colors';

export const theme = createTheme({
  
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: COLORS.bg,
        },
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.bold,
    },
    secondary: {
      main: COLORS.dark,
    },
    text: {
      primary: COLORS.text,
    },
  },
  typography: {
    fontFamily: 'VT323',
  },
  
});