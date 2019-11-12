import { createMuiTheme } from "@material-ui/core/styles";
import { purple, blue } from "@material-ui/core/colors";

const body_theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#303030"
    },
    third: {
      main: "#ffffff"
    }
  }
});

export default body_theme;
