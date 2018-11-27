import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AutocompleteComponent from './Asset/GeocodeAutocomplete';
import GoogleMapComponent from './Asset/GoogleMapComp';
import { saveLocalStorage } from '../../../utils/localstorage';

function loadLocalStorage(e) {
  const x = window.localStorage.getItem(localstorage_key);
  this.setState({ userJson: x });
  this.refs.textarea.value = x;
  this.validateJson();
}

const styles = {
  card: {
    minHeight: '50vh',
  },
};

class ChooseLocation extends React.Component {
  constructor(props) {
    super(props);

    this.mapper = React.createRef();
  }


  locationLink(address, lat, lon) {
    // console.log('address: ' + address + '\nlat: ' + lat + '\nlon: ' + lon);
    saveLocalStorage('address', address);
    saveLocalStorage('lat', lat);
    saveLocalStorage('lon', lon);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Choose location

          <Card className={classes.card}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <AutocompleteComponent locationLink={this.locationLink} />
              </Grid>
              <Grid item xs={12}>
                <GoogleMapComponent ref={this.mapper} />
              </Grid>
            </Grid>

          </Card>

        </Typography>

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChooseLocation);
