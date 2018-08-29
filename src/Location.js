import React, { Component } from 'react'

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }

    this.handleKeyUp = this.keyUpHandler.bind(this)
  }

  keyUpHandler(el) {
    if (el.keyCode === 13) {
      this.setState({ showDetails: !this.state.showDetails })
    }
    window.google.maps.event.trigger(this.props.location.marker, 'click');
  }

  render() {
    const { location } = this.props

    return (
      <li className="list-item"
          role="button"
          onClick={this.handleKeyUp}
          onKeyUp={this.handleKeyUp}
          tabIndex="0">
        {location.name}
        {this.state.showDetails && <div>
          <p>{location.address}</p>
        </div>}
      </li>
    )
  }
}

export default Location
