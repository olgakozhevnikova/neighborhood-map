import React, { Component } from 'react'
import Sidebar from './Sidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: require('./locations.json'),
      map: '',
      infoWindow: '',
      marker: ''
    }

    this.initMap = this.initMap.bind(this)
    this.openInfoWindow = this.openInfoWindow.bind(this)
    this.closeInfoWindow = this.closeInfoWindow.bind(this)
  }

  componentDidMount() {
    window.initMap = this.initMap
    loadMapJS(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBSBdeHrWWU7GEbOF54AGQZt81GyLGBzZo&callback=initMap'
    )
  }

  initMap() {
    var self = this

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 12.972442, lng: 77.580643
      },
      zoom: 13
    })

    var InfoWindow = new window.google.maps.InfoWindow({})

    window.google.maps.event.addListener(InfoWindow, 'closeclick', () => {
      self.closeInfoWindow()
    })

    this.setState({
      map: map,
      infowindow: InfoWindow
    })

    window.google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      window.google.maps.event.trigger(map, "resize");
      self.state.map.setCenter(center);
    })

    window.google.maps.event.addListener(map, "click", function() {
      self.closeInfoWindow();
    })

    var locations = [];
    this.state.locations.forEach((location) => {
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          location.location.lat,
          location.location.lng
        ),
        animation: window.google.maps.Animation.DROP,
        map: map
      });

      marker.addListener("click", () => {
        self.openInfoWindow(marker);
      });

      location.marker = marker;
      console.log(location.marker)
      location.display = true;
      locations.push(location);
    });
    this.setState({
      locations: locations
    });
  }

  openInfoWindow(marker) {
    this.closeInfoWindow();
    this.state.infowindow.open(this.state.map, marker);
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({
      prevmarker: marker
    });
    this.state.infowindow.setContent("Loading Data...");
    this.state.map.setCenter(marker.getPosition());
    this.state.map.panBy(0, -200);
    this.getMarkerInfo(marker);
  }

  closeInfoWindow() {
    if (this.state.prevmarker) {
      this.state.prevmarker.setAnimation(null);
    }
    this.setState({
      prevmarker: ""
    });
    this.state.infowindow.close();
  }

  getMarkerInfo(marker) {
    var self = this;

    // Add the api keys for foursquare
    var clientId = "1NMCBUQMUDH2E5KQKNN4X3IZKPC551LD0TQNN140AZTVCW4R";
    var clientSecret = "KOKHBE0JAUITZYQPDJ4JS1OXTZT02CAOVDC0D04WNHWHIACI";

    // Build the api endpoint
    var url =
      "https://api.foursquare.com/v2/venues/search?client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret +
      "&v=20130815&ll=" +
      marker.getPosition().lat() +
      "," +
      marker.getPosition().lng() +
      "&limit=1";
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          self.state.infowindow.setContent('The data is not available.');
          return;
        }

        // Get the text in the response
        res.json().then(function(data) {
          console.log(data);

          var location_data = data.response.venues[0];
          var place = `<h3>${location_data.name}</h3>`;
          var street = `<p>${location_data.location.formattedAddress[0]}</p>`;
          var contact = "";
          if (location_data.contact.phone)
            contact = `<p><small>${location_data.contact.phone}</small></p>`;
          var checkinsCount =
            "<b>Number of CheckIn: </b>" +
            location_data.stats.checkinsCount +
            "<br>";
          var readMore =
            '<a href="https://foursquare.com/v/' +
            location_data.id +
            '" target="_blank">Read More on <b>Foursquare Website</b></a>';
          self.state.infowindow.setContent(
            place + street + contact + checkinsCount + readMore
          );
        });
      })
      .catch(function(err) {
        self.state.infowindow.setContent("Sorry data can't be loaded");
      });
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
            locations={this.state.locations}
            openInfoWindow={this.openInfoWindow}
            closeInfoWindow={this.closeInfoWindow}
          />
        </div>
        <div className="map" id="map"></div>
      </div>
    );
  }
}

export default App;

function loadMapJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.onerror = function() {
    document.write("Google Maps can't be loaded");
  };
  ref.parentNode.insertBefore(script, ref);
}
