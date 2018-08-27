import React, { Component } from 'react'

class Location extends Component {
  render() {
    const { location } = this.props

    return (
      <li key={location.location.lat}>
        {location.name}
      </li>
    )
  }
}

export default Location
