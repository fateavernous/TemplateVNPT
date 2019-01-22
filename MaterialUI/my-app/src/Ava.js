import React from 'react';
import Grid from '@material-ui/core/Grid';
import Ava from './avatar.png';

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
    <img src={Ava} width="160" height="160" />
    </Grid>
  );
}

export default LetterAvatars;
