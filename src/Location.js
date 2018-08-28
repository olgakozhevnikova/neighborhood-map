import React, { Component } from 'react'

class Location extends Component {
  state = {
    showDetails: false
  }
  // make marker clicked
  open = () => {
    window.google.maps.event.trigger(this.props.location.marker,'click');
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const { location } = this.props

    return (
      <li className="list-item"
          onClick={() => this.open(location)}
          tabindex="0">
        {location.name}
        {this.state.showDetails && <div>
          <p>{location.address}</p>
        </div>}
      </li>
    )
  }
}

export default Location
