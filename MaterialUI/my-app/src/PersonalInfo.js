import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from './Tables';
import Avatar from './Ava';
import TopMenu from './TopBar';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import List from './List';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    // width: 100,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={12}>
        <TopMenu />
        </Grid>
        <Grid item xs={8}>
          <Table />
          <br/>
        </Grid>
        <Grid item xs={4} align="center">
          <br/>
          <Avatar />
          <br/>
          <List />
        </Grid>
        <Grid item xs={2}>
          <Button1 />
        </Grid>
        <Grid item xs={4} align="center">
          <Button2 />
        </Grid>
        <Grid item xs={2}>
          <Button3 />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
