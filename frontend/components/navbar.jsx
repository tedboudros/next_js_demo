import { Typography, AppBar, Toolbar, Button, Box, Grid, Link } from "@material-ui/core";
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
    const { isAuthenticated, dispatch } = this.props;
    return (
      <AppBar position="fixed" style={{ zIndex: "1000000" }}>
        <Toolbar>
          {/*Title & Socials*/}
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>

          {/*Grid Buttons (Login & Register*/}
          {!this.props.isAuthenticated ? (
            <Box ml="auto">
              <Grid container spacing={1}>
                <Grid item="true">
                  <Link href="/signin">
                    <Button variant="contained" color="secondary">
                      Login
                    </Button>
                  </Link>
                </Grid>
                <Grid item="true" value="true">
                  <Link href="/signup">
                    <Button variant="contained" color="secondary">
                      Register
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box ml="auto">
              <Button variant="contained" onClick={this.signOut} color="secondary">
                SignOut
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
export default connect(state => state, actions)(Navbar);
