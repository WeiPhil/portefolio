import red from "@material-ui/core/colors/red";
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#BF360C",
    },
    secondary: {
      main: "#585858",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f1f1f1",
    },
  },
});

export default theme;
