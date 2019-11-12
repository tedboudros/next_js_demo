import { createMuiTheme } from "@material-ui/core/styles";

const body_theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#333"
    },
    secondary: {
      main: "#303030"
    }
  }
});

export default body_theme;
