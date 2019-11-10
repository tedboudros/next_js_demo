import { fade, makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Button, Box, Grid, Icon } from "@material-ui/core";
import { palette } from "@material-ui/system";
import { indigo, purple } from "@material-ui/core/colors";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          {/*Title & Socials*/}
          <Box>
            <Typography variant="h6">Forum.io</Typography>
          </Box>

          {/*Grid Buttons (Login & Register*/}
          <Box ml="auto">
            <Grid container spacing={1}>
              <Grid item={true}>
                <Button variant="contained" color="secondary">
                  Login
                </Button>
              </Grid>
              <Grid item={true}>
                <Button variant="contained" color="secondary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
