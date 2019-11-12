import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Avatar,
  CardActions,
  IconButton
} from "@material-ui/core";
import initialize from "../../utils/initialize";
import { ArrowRightAlt } from "@material-ui/icons";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      content: ""
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }
  onChange(e) {
    this.setState({
      content: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addPost(
      { token: this.props.auth.token, content: this.state.content },
      "add"
    );
    this.setState({ content: "" });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            avatar={
              <Avatar style={{ background: "#465881" }} aria-label="recipe">
                {this.props.auth.user.username.charAt(0)}
              </Avatar>
            }
          />
          <CardContent>
            <TextField
              width={1}
              name="content"
              value={this.state.content}
              onChange={this.onChange}
              fullWidth
              id="standard-textarea"
              label="What are you thinking..."
              placeholder="Describe to the world what you're thinking!"
              multiline
              variant="standard"
            />
          </CardContent>
          <CardActions disableSpacing>
            <Box ml="auto">
              <IconButton onClick={this.onSubmit}>
                <ArrowRightAlt />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default connect(state => state, actions)(CreatePost);
