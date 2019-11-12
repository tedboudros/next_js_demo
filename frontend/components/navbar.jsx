import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
  Link,
  Fab
} from "@material-ui/core";
import { Navigation, Lock } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }
  signOut(e) {
    this.props.deauthenticate();
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <AppBar style={{ zIndex: 1000000 }}>
        <Toolbar>
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>
          {/*IF STATEMENT TO HIDE AUTHENTICATION   */}
          {!this.props.auth.token ? (
            <Box ml="auto">
              <Grid container spacing={1}>
                <Grid item={true}>
                  <Link href="/signin" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="third">
                      Login
                    </Button>
                  </Link>
                </Grid>
                <Grid item={true} value="true">
                  <Link href="/signup" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="third">
                      Register
                    </Button>
                  </Link>
                </Grid>
                <Grid item={true} value="true">
                  <Fab
                    variant="extended"
                    size="small"
                    color="third"
                    aria-label="add"
                    style={{ padding: "5px" }}
                  >
                    <Lock />
                    Login
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
export default connect(state => state, actions)(Navbar);
