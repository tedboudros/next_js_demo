import { Input, Grid, TextField, Box, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Authentication = () => (
  <div>
    <Grid container direction="row" justify="center" alignItems="center">
      <Card>
        <CardContent>
          <Box ml={5}>
            <Typography variant="h5">Login</Typography>
          </Box>
          {/*INPUT FILDS*/}
          <Grid container>
            <Grid item xs={6}>
              <Box m={5}>
                <TextField id="outlined-basic" label="Username" margin="normal" variant="outlined" />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box m={5}>
                <TextField id="outlined-basic" label="Password" margin="normal" variant="outlined" />
              </Box>
            </Grid>
          </Grid>
          {/*INPUT FILDS ~END*/}
        </CardContent>
      </Card>
    </Grid>
  </div>
);

export default Authentication;
