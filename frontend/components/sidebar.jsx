import React, { Component } from "react";
import { Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Create from "@material-ui/icons/Create";
import Home from "@material-ui/icons/Home";
import Postadd from "@material-ui/icons/PostAdd";
class Sidebar extends Component {
  render() {
    return (
      <div>
        {/*Sidebar Component */}
        {!this.props.isAuthenticated && (
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
        )}
      </div>
    );
  }
}

export default Sidebar;
