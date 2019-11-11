import React, { Component } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from "@material-ui/core";
import Create from "@material-ui/icons/Create";
import Home from "@material-ui/icons/Home";
import Postadd from "@material-ui/icons/PostAdd";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import actions from "../redux/actions";

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
                {/*Create Post */}
                <ListItem button>
                  <ListItemIcon>
                    <Postadd />
                  </ListItemIcon>
                  <ListItemText primary="Create Post" />
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
