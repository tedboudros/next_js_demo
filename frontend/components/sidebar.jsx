import React, { Component } from "react";
import { Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Box, Button } from "@material-ui/core";
import { Create, Home, Lock } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

class Sidebar extends Component {
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
      <div>
        {!!this.props.auth.token ? (
          <Drawer style={{ width: "240px" }} variant="permanent">
            <div style={{ width: "240px" }} />

            <Divider />
            <Box mt={10}>
              {/*Home Page Icon */}
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                {/*Settings Icon */}
                <ListItem button>
                  <ListItemIcon>
                    <Create />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </List>
              {/*Logout Button*/}
              <ListItem onClick={this.signOut} button>
                <ListItemIcon>
                  <Lock />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Box>
          </Drawer>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(state => state, actions)(Sidebar);
