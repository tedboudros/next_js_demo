import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid
} from "@material-ui/core";

export default function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        {/*Title & Socials*/}
        <Box>
          <Typography variant="h6">Forum.io</Typography>
        </Box>

        {/*Grid Buttons (Login & Register*/}
        <Box ml="auto">
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
