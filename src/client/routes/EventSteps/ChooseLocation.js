import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MapComponent from './Asset/AutoComplete';

export class ChooseLocation extends React.Component {

  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Choose location
          <MapComponent />
        </Typography>
        
      </React.Fragment>
    );
  }
}

/*
function ChooseLocation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose location
        <MapComponent />
      </Typography>
      
    </React.Fragment>
  );
}
*/

export default ChooseLocation;
