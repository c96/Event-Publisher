import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function EventForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Get Started
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            required
            id="eventName"
            name="eventName"
            label="Event name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="eventDesc"
            name="eventDesc"
            label="Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="isGoing" value="yes" />}
            label="Creator of event is attending"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EventForm;