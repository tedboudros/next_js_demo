import React, { Component } from "react";
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Box, Button } from "@material-ui/core";
import { Home, Lock, Settings } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";
import Link from "next/link";

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
                    <Settings />
                  </ListItemIcon>

                  <Link href="/settings">
                    <ListItemText primary="Settings" />
                  </Link>
                </ListItem>
                {/*Logout Button*/}
                <ListItem onClick={this.signOut} button>
                  <ListItemIcon>
                    <Lock />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
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
