import Head from "next/head";
import Container from "@material-ui/core/Container";
import Navbar from "./navbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { grey, purple, blue } from "@material-ui/core/colors";
{
  /*Material-Ui Themes*/
}
const navbar_theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: grey[100]
    }
  }
});

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

const Layout = props => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
      <title>Forum.io</title>
    </Head>
    <MuiThemeProvider theme={navbar_theme}>
      <Navbar />
    </MuiThemeProvider>

    <MuiThemeProvider theme={body_theme}>{props.children}</MuiThemeProvider>
  </div>
);

export default Layout;
