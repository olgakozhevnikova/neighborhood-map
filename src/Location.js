import React, { Component } from 'react'

class Location extends Component {
  clicked() {
    console.log('click is working')
  }

  render() {
    const { location } = this.props

    return (
      <li className="list-item"
          onClick={this.clicked}>
        {location.name}
      </li>
    )
  }
}

export default Location
