import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
  Link
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
              <Link href="/signin">
                <Button variant="contained" color="buttons">
                  Login
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup">
                <Button variant="contained" color="buttons">
                  Register
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
