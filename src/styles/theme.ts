import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#3f51b5",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;