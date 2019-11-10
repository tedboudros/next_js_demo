import { createMuiTheme } from "@material-ui/core/styles";
import { purple, blue } from "@material-ui/core/colors";

const body_theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: blue[100]
    }
  }
});

export default body_theme;
