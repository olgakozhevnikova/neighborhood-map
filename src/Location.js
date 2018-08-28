import React, { Component } from 'react'

class Location extends Component {
  // make marker clicked
  open = () => {
    window.google.maps.event.trigger(this.props.location.marker,'click');
  }

  render() {
    const { location } = this.props

    return (
      <li className="list-item"
          onClick={() => this.open(location)}>
        {location.name}
      </li>
    )
  }
}

export default Location
