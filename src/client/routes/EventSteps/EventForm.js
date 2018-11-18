import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Scheduling from './Asset/Scheduling';

// recommended to be in root of component tree, but date/time used only in event page
//import DateFnsUtils from 'date-fns';
//import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';

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
              multiline="true"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="isGoing" value="yes" />}
              label="Creator of event is attending"
            />
          </Grid>
          <Grid item xs={12}>
            <Scheduling />
          </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default EventForm;