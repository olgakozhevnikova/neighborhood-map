import React, { Component } from 'react'
import Sidebar from './Sidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: require('./locations.json'),
      map: {
        lat: 12.972442, lng: 77.580643
      },
      infoWindow: '',
      marker: ''
    }
  }

  render() {
    return (
      <div className="App">
        <nav id="list-toggle" className="toggle" onClick={this.toggleList}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
          </svg>
        </nav>
        <div className="sidebar">
          <Sidebar 
            places={places}/>
        </div>
        <div className="map" id="map">
          <MapContainer
            places={places}
            google={this.state.map}
            zoom={13}
            center={this.state.map}/>
        </div>
      </div>
    );
  }
}

export default App;
