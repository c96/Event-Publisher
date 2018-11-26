import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '70%',
  height: '40%'
};

export class MapComponent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
        onClick={this.mapClicked}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec'
})(MapComponent);
