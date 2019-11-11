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
    return (
      <AppBar style={{ zIndex: 1000000 }}>
        <Toolbar>
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>
          {!this.props.auth.token ? (
            <Box ml="auto">
              <Grid container spacing={1}>
                <Grid item={true}>
                  <Link href="/signin">
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                  </Link>
                </Grid>
                <Grid item={true} value="true">
                  <Link href="/signup">
                    <Button variant="contained" color="secondary">
                      Register
                    </Button>
                  </Link>
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
