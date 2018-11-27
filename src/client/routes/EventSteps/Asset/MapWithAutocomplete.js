import React from 'react';
import {
  GoogleApiWrapper, InfoWindow, Map, Marker
} from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export class GoogleMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    this.forceUpdate();
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {

    const style = {
      position: 'relative',
      width: '45vw',
      height: '35vh'
    };
    return (
      <Paper>
        
        <div>
          <Map
            item
            style={style}
            className="map"
            google={this.props.google}
            // containerStyle={containerStyle}
            onClick={this.onMapClick}
            onReady={this.forceUpdate}
            zoom={14}
            initialCenter={{ lat: 33.4255, lng: -111.94 }}
          >
            <Marker
              onClick={this.onMarkerClick}
              title="aaatest"
              position={{ lat: 33.4255, lng: -111.94 }}
              name="nameeee"
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <Paper>
                <Typography
                  variant="headline"
                  component="h4"
                >
                  marker.title
                </Typography>
                <Typography
                  component="p"
                >
                  marker.name
                </Typography>
              </Paper>
            </InfoWindow>
          </Map>
        </div>
      </Paper>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec'
})(GoogleMapContainer);

/*
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
      <div className={styles.flexWrapper}>
        <div className={styles.left}>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />

            <input className={styles.button} type="submit" value="Go" />
          </form>

          <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
          </div>
        </div>

        <div className={styles.right}>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={false}
            containerStyle={{
              height: '100vh',
              position: 'relative',
              width: '100%'
            }}>
            <Marker position={position} />
          </Map>
        </div>
      </div>
    );
  }
}

*/