import { createMuiTheme } from "@material-ui/core/styles";
import { purple, blue } from "@material-ui/core/colors";

const body_theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#465881"
    },
    secondary: {
      main: "#FFFFFF"
    }
  }
});

export default body_theme;
