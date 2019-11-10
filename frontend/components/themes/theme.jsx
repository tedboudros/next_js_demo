import { createMuiTheme } from "@material-ui/core/styles";
import { purple, blue } from "@material-ui/core/colors";

const body_theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#465881"
    },
    secondary: {
      main: "#00909e"
    },
    buttons: {
      main: "#c9d1d3"
    }
  }
});

export default body_theme;
