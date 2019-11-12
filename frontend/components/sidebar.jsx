import React, { Component } from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button
} from "@material-ui/core";
import { Home, Settings } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";
import Link from "next/link";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  render() {
    return (
      <div>
        {!!this.props.auth.token ? (
          <Drawer
            style={{ width: "240px" }}
            color="primary"
            variant="permanent"
          >
            <div style={{ width: "240px" }} />

            <Divider />
            <Box mt={10}>
              <List>
                {/*Home Page Icon */}
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <Link href="/">
                    <ListItemText primary="Home" />
                  </Link>
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
