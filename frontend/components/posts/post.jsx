import React, { Component } from "react";
import { Box, Card, CardContent, CardHeader, CardActions, Container, Avatar, ListItem, Grid, Tooltip, TextField } from "@material-ui/core";
import { Favorite, Delete, Create } from "@material-ui/icons";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import actions from "../../redux/actions";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      content: this.props.post_content
    };
    this.editMode = this.editMode.bind(this);
    this.onChange = this.onChange.bind(this);
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
  render() {
    return (
      <div>
        <Box>
          <Card>
            <Container>
              <CardHeader subheader="Username" align="left" avatar={<Avatar alt="Remy Sharp" style={{ background: "#465881" }} />} />
              <CardContent>{this.state.editMode ? this.state.content : <TextField id="standard-basic" onChange={this.onChange} value={this.state.content} fullWidth label="Standard" />}</CardContent>
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
                  {/*Delete ActionButton */}
                  <Grid item={true}>
                    <ListItem button>
                      <Delete />
                    </ListItem>
                  </Grid>
                  {/*Edit Action Button */}
                  <Grid item={true}>
                    <ListItem button>
                      <Create onClick={this.editMode} />
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
