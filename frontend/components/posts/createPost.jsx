import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { Box, Card, CardContent, CardHeader, TextField, Container, Avatar, Button, ButtonGroup } from "@material-ui/core";
import initialize from "../../utils/initialize";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      content: ""
    };
  }

  onChange(e) {
    this.setState({
      content: e.target.value
    });
    console.log(this.state);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state.content);
    this.setState({ content: "" });
  }

  render() {
    return (
      <div>
        <Box width={1} alignContent="center">
          <Card>
            <Container>
              <CardHeader align="left" avatar={<Avatar alt="Remy Sharp" style={{ background: "red" }} />} title="Username" subheader={Date()} />
              <CardContent>
                <Box item={true}>
                  <TextField width={1} name="content" value={this.state.content} onChange={this.onChange} fullWidth id="standard-textarea" label="What are you thinking..." placeholder="Describe the world what you think" multiline variant="standard" />
                </Box>
                <Box mt={2} align="right">
                  <ButtonGroup fullWidth aria-label="full width outlined button group">
                    <Button onClick={this.onSubmit}>POST</Button>
                    <Button>IMAGE</Button>
                    <Button>SETTINGS</Button>
                  </ButtonGroup>
                </Box>
              </CardContent>
            </Container>
          </Card>
        </Box>
      </div>
    );
  }
}

//export default connect(state => createPost, actions)(CreatePost);
export default connect(state => state, actions)(CreatePost);
