import React, { Component } from "react";
import { Box, Card, CardContent, CardHeader, CardActions, Container, Avatar, ListItem, Grid, Tooltip, TextField } from "@material-ui/core";
import { Favorite, Comment, Delete, VpnKey } from "@material-ui/icons";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true
    };
  }

  editMode(e) {
    this.setState({
      editMode: false
    });
  }
  render() {
    return (
      <div>
        <Box>
          <Card>
            <Container>
              <CardHeader subheader="Username" align="left" avatar={<Avatar alt="Remy Sharp" style={{ background: "#465881" }} />} />
              {this.state.onEdit ? <CardContent>Hello World!</CardContent> : <TextField id="standard-basic" fullWidth label="Standard" />}

              <CardActions>
                <Grid container>
                  {/*Like Icon */}
                  <Grid item={true}>
                    <Tooltip title="1 like">
                      <ListItem button>
                        <Favorite />
                      </ListItem>
                    </Tooltip>
                  </Grid>
                  {/*Comment Icon */}
                  <Grid item={true}>
                    <Tooltip title="1 Comment">
                      <ListItem button>
                        <Comment />
                      </ListItem>
                    </Tooltip>
                  </Grid>
                </Grid>
                {/* Action Buttons */}

                <Grid>
                  {/*Delete ActionButton */}
                  <Grid item={true}>
                    <ListItem button>
                      <Delete />
                    </ListItem>
                  </Grid>
                  {/*Edit Action Button */}
                  <Grid item={true}>
                    <ListItem button>
                      <VpnKey onClick={this.editMode} />
                    </ListItem>
                  </Grid>
                </Grid>
              </CardActions>
            </Container>
          </Card>
        </Box>
      </div>
    );
  }
}

export default Post;
