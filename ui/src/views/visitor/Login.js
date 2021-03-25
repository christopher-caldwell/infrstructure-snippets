import React from 'react';
import Grid from '@material-ui/core/Grid'

const Login = () => {
  return (
    <Grid container>
      <Grid item>
        <Grid container>
          <Grid item>One</Grid>
          <Grid item>Two</Grid>
          <Grid item>Three</Grid>
        </Grid>
        <Grid container>
          <Grid item>One</Grid>
          <Grid item>Two</Grid>
          <Grid item>Three</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;