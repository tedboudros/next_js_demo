import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton
} from "@material-ui/core";
import { AccountCircle, AddCircle, LockOpen } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: 48,
    padding: "0 30px"
  }
});

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
      <AppBar
        style={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
          zIndex: 1000000
        }}
        color="default"
      >
        <Toolbar>
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>
          {/*IF STATEMENT TO HIDE AUTHENTICATION   */}
          {!this.props.auth.token ? (
            <Box ml="auto">
              <Link href="/signin" style={{ textDecoration: "none" }}>
                <IconButton>
                  <AccountCircle />
                </IconButton>
              </Link>
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <IconButton>
                  <AddCircle />
                </IconButton>
              </Link>
            </Box>
          ) : (
            <Box ml="auto">
              <p style={{ display: "inline" }}>
                {this.props.auth.user.username}
              </p>
              <IconButton onClick={this.signOut}>
                <LockOpen />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
export default connect(state => state, actions)(Navbar);
