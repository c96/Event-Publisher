import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MapComponent from './Asset/AutoComplete';

function ChooseLocation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose location
      </Typography>
      <Grid container justify="left">
        <MapComponent />
      </Grid>
    </React.Fragment>
  );
}

export default ChooseLocation;
