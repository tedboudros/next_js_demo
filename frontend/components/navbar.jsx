import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
  Link
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <AppBar>
        <Toolbar>
          {/*Title & Socials*/}
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>

          {/*Grid Buttons (Login & Register*/}
          {this.props.isAuthenticated ? (
            <Box ml="auto">
              <Grid container spacing={1}>
                <Grid item>
                  <Link href="/signin">
                    <Button variant="contained" color="secondary">
                      Login
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
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
