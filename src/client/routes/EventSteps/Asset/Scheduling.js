import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

export default class BasicDateTimePicker extends PureComponent {
  state = {
    selectedDate: new Date('December 17, 2018 13:54:00'),
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <DateTimePicker 
        value={selectedDate} 
        onChange={this.handleDateChange} 
        label="Enter date and time"
        showTodayButton />
    </MuiPickersUtilsProvider>
    );
  }
}
