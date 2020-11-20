import React from 'react';
import { Grid } from '@material-ui/core';

const Chat = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        List
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid xs={10}>Text area</Grid>
          <Grid xs={2}>Button </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
