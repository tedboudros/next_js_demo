import React, { Component } from "react";
import { Box, Card, CardContent, CardHeader, CardActions, Container, Avatar, ListItem, Grid, Tooltip, TextField, Fab, Typography } from "@material-ui/core";
import { Favorite, Delete, Create } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import actions from "../../redux/actions";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      content: this.props.post_content,
      postLikes: this.props.post_likes
    };
    this.editMode = this.editMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  static getInitialProps(ctx) {
    initialize(ctx);
  }
  editMode(e) {
    this.setState({
      editMode: !this.state.editMode
    });
  }
  onChange(e) {
    this.setState({
      content: e.target.value
    });
  }
  // changes the content of post || ( δεν έχω περάσει το id και δεν δουλεύει )
  onSubmit(e) {
    e.preventDefault();
    this.props.changePost({ token: this.props.auth.token, content: this.state.content }, "change");
    this.setState({ content: this.props.post_content });
  }
  //delete POST || ( δεν έχω περάσει το id και δεν δουλεύει )
  deletePost(e) {
    e.preventDefault();
    this.props.changePost({ token: this.props.auth.token }, "delete");
  }
  // this passes the username to state and appears in post title || now it's hardcoded to username || line 54 subheader="Username"
  componentDidMount() {
    if (!!this.props.auth.token) this.props.getUser({ token: this.props.auth.token }, "5dc828040aa30b0118511838");
  }
  //like button
  componentWillMount() {
    if (!!this.props.auth.token) this.props.addLike({ token: this.props.auth.token }, "like");
  }
  render() {
    return (
      <div>
        <Box>
          <Card>
            <Container>
              <CardHeader subheader="Username" align="left" avatar={<Avatar alt="Remy Sharp" style={{ background: "#231F20" }} />} />
              <CardContent>
                {this.state.editMode ? (
                  this.state.content
                ) : (
                  <Box>
                    <Fab variant="extended" size="small" color="primary" aria-label="add" onClick={this.onSubmit} style={{ padding: "5px" }}>
                      <Create />
                      <Typography component="p">Update</Typography>
                    </Fab>
                    <TextField id="standard-basic" onChange={this.onChange} value={this.state.content} fullWidth label="Standard" />
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Grid container>
                  {/*Like Icon */}
                  <Grid item={true}>
                    <Tooltip title={`${this.state.postLikes} line`}>
                      <ListItem button>
                        <Favorite />
                      </ListItem>
                    </Tooltip>
                  </Grid>
                  {/*Delete ActionButton */}
                  <Grid item={true}>
                    <ListItem button onClic={this.deletePost}>
                      <Delete />
                    </ListItem>
                  </Grid>
                  {/*Edit Action Button */}
                  <Grid item={true}>
                    <ListItem button onClick={this.editMode}>
                      <Create />
                    </ListItem>
                  </Grid>
                </Grid>
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
