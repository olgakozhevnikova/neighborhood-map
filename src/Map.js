import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

export class MapContainer extends Component {
  render() {
    const { places, zoom, center } = this.props

    let title
    let location

    places.map(place => {
      title = place.title
      location = place.location
    })

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBSBdeHrWWU7GEbOF54AGQZt81GyLGBzZo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          /> */}
        </GoogleMapReact>
      </div> 
    )
  }
}

export default MapContainer
