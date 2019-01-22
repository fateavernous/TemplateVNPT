import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Button from './Button1';
import rat from './rat.jpg';
import immune from './immune.jpg';
import transplant from './transplant.jpg';
import reprogram from './reprogram.jpg';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <img src={rat} width="160" height="120" />
        <ListItemText primary="Alzheimer's blood test detects brain damage years before symptoms" secondary="A blood test for a protein could identify people in the early stages of Alzheimer's disease a decade or more before symptoms, such as a decline in memory and thinking, emerge." />
      </ListItem>
      <br/>
      <Divider variant="inset" component="li"/>
      <ListItem>
        <img src={immune} width="160" height="120" />
        <ListItemText primary="How your immune system uses chaos to prevent disease" secondary="New research, appearing in the journal Nature Communications, reveals a new mechanism that is at play in cellular function to help our immune system alert and functional." />
      </ListItem>
      <br/>
      <Divider variant="inset" component="li" />
      <ListItem>
        <img src={transplant} width="160" height="120" />
        <ListItemText primary="Common food additive may impact gut bacteria, increase anxiety" secondary="A wide range of foods contain ingredients that we call emulsifiers. A new study in mice shows that these compounds can produce both physiological and behavioral changes." />
      </ListItem>
      <br/>
      <Divider variant="inset" component="li"/>
      <ListItem>
        <img src={reprogram} width="160" height="120" />
        <ListItemText primary="'Reprogramming' immune cells to attack cancer tumors" secondary="Cancer cells can be treacherous targets for both therapeutic agents and the body's natural defense line — the immune system. But a new approach to rewiring macrophages." />
      </ListItem>
    </List>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
