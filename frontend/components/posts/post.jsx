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
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
        <Card>
          <CardHeader
            avatar={
              <Avatar
                style={
                  this.props.post_info.user === this.props.auth.user.id
                    ? { background: "#465881" }
                    : { background: "#ccc" }
                }
                aria-label="recipe"
              >
                {this.props.post_info.username.charAt(0)}
              </Avatar>
            }
            action={<Box style={{ marginLeft: "60px" }}></Box>}
            title={this.props.post_info.username}
            subheader={
              new Date(this.props.post_info.createdAt).getDate() +
              " / " +
              new Date(this.props.post_info.createdAt).getMonth() +
              " / " +
              new Date(this.props.post_info.createdAt).getFullYear()
            }
          />
          <CardContent>
            {this.state.editMode ? (
              <Typography variant="body2" color="textPrimary" component="h3">
                {this.state.content}
              </Typography>
            ) : (
              <TextField
                id="standard-basic"
                onChange={this.onChange}
                value={this.state.content}
                fullWidth
                label="Editing post:"
              />
            )}
          </CardContent>
          <CardActions disableSpacing>
            <Typography
              style={{ marginLeft: "20px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {this.state.likes}
            </Typography>
            <IconButton onClick={this.likePost} aria-label="Like">
              <FavoriteIcon />
            </IconButton>
            {this.props.post_info.user === this.props.auth.user.id ? (
              <Box ml="auto">
                <IconButton aria-label="Share" onClick={this.editMode}>
                  <Create />
                </IconButton>
                <IconButton aria-label="Share" onClick={this.deletePost}>
                  <Delete />
                </IconButton>
              </Box>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default connect(state => state, actions)(Post);
