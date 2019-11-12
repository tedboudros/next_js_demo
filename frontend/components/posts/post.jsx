import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Container,
  Avatar,
  ListItem,
  Grid,
  Tooltip,
  TextField,
  Fab,
  Typography
} from "@material-ui/core";
import { Favorite, Delete, Create } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import actions from "../../redux/actions";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      content: this.props.post_info.content,
      likes: this.props.post_info.likes
    };
    this.editMode = this.editMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.likePost = this.likePost.bind(this);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  editMode(e) {
    this.setState({
      editMode: !this.state.editMode
    });
    if (this.state.editMode == false) {
      this.props.changePost(
        {
          token: this.props.auth.token,
          content: this.state.content,
          id: this.props.post_info._id
        },
        "change"
      );
      this.setState({ content: this.state.content });
    }
  }
  onChange(e) {
    this.setState({
      content: e.target.value
    });
  }
  likePost(e) {
    e.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
    this.props.addLike(
      {
        token: this.props.auth.token,
        id: this.props.post_info._id
      },
      "like"
    );
  }
  //delete POST || ( δεν έχω περάσει το id και δεν δουλεύει )
  deletePost(e) {
    e.preventDefault();
    this.props.deletePost(
      { token: this.props.auth.token, id: this.props.post_info._id },
      "delete"
    );
  }
  render() {
    return (
      <div>
        <Box>
          <Card>
            <Container>
              <CardHeader
                subheader={this.props.post_info.username}
                align="left"
                avatar={
                  <Avatar
                    alt="Remy Sharp"
                    style={
                      this.props.post_info.user === this.props.auth.user.id
                        ? { background: "#465881" }
                        : { background: "#231F20" }
                    }
                  />
                }
              />
              <CardContent>
                {this.state.editMode ? (
                  this.state.content
                ) : (
                  <Box>
                    <TextField
                      id="standard-basic"
                      onChange={this.onChange}
                      value={this.state.content}
                      fullWidth
                      label="Standard"
                    />
                  </Box>
                )}
              </CardContent>
              <CardActions>
                {this.props.post_info.user === this.props.auth.user.id ? (
                  <Grid container>
                    {/*Like Icon */}
                    <Grid item={true}>
                      <Tooltip title={`${this.state.likes}  likes`}>
                        <ListItem onClick={this.likePost} button>
                          <Favorite />
                        </ListItem>
                      </Tooltip>
                    </Grid>
                    <Grid item={true}>
                      <ListItem button onClick={this.deletePost}>
                        <Delete />
                      </ListItem>
                    </Grid>
                    <Grid item={true}>
                      <ListItem button onClick={this.editMode}>
                        <Create />
                      </ListItem>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container>
                    {/*Like Icon */}
                    <Grid item={true}>
                      <Tooltip
                        onClick={this.likePost}
                        title={`${this.state.likes} likes`}
                      >
                        <ListItem button>
                          <Favorite />
                        </ListItem>
                      </Tooltip>
                    </Grid>
                  </Grid>
                )}
                {/* Action Buttons */}
              </CardActions>
            </Container>
          </Card>
        </Box>
      </div>
    );
  }
}
export default connect(state => state, actions)(Post);
