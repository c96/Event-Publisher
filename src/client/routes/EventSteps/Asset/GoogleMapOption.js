import React, { Component } from 'react';

import {
  GoogleApiWrapper, InfoWindow, Map, Marker
} from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { loadLocalStorage } from '../../../../utils/localstorage';

class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        position: null
    };
  }

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    const { position } = this.state;

    return (
      <React.Fragment>
        <Grid container>
          <Grid item>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="Street Address"
                ref={ref => (this.autocomplete = ref)}
                type="text"
              />
            </form>
          </Grid>
          <Grid item>
            <Typography>Latitude: {position && position.lat()}</Typography>
            <Typography>Longitude: {position && position.lng()}</Typography>
          </Grid>
        </Grid>

        <Grid>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={false}
            containerStyle={{
              position: 'relative',
              width: '45vw',
              height: '35vh'
            }}>
            <Marker position={position} />
          </Map>
        </Grid>
      </React.Fragment>
    );
  }
}

const MapWrapper = props => (
  <Map className="map" google={props.google} visible={false}>
    <GoogleMapContainer {...props} />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDBa0d3xAgLCHNHQSKyE8JCKhMzUzDBZkY'
})(MapWrapper);