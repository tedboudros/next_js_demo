import React, { Component } from "react";
import { Box, Card, CardContent, CardHeader, CardActions, TextField, Container, Avatar, ListItem, Grid } from "@material-ui/core";
import { Favorite, Comment } from "@material-ui/icons";

class Post extends Component {
  render() {
    return (
      <div>
        <Box>
          <Card>
            <Container>
              <CardHeader title="Post Title" subheader="Username" align="left" avatar={<Avatar alt="Remy Sharp" style={{ background: "red" }} />} />
              <CardContent>Hello World</CardContent>
              <CardActions>
                <Grid>
                  <Grid item="true">
                    <ListItem button>
                      <Favorite />
                    </ListItem>
                  </Grid>
                  <Grid item="true">
                    <ListItem button>
                      <Comment />
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
