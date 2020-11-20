import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  avatar: {
    width: '100%',
  },
});

const ProfileUserPage = () => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      ProfileUserPage
    </Container>
  );
};

export default ProfileUserPage;
