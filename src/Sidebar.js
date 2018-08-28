import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import Location from './Location'

class Sidebar extends Component {
  constructor(props) {
  super(props);
  this.state = {
      query: '',
      locations: ''
    }

    this.updateQuery = this.updateQuery.bind(this)
  }

  componentWillMount() {
    this.setState({ locations: this.props.locations })
  }

  updateQuery = (query) => {
    var locations = []
    this.props.locations.forEach((location) => {
    if (location.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
      location.marker.setVisible(true)
      locations.push(location)
    } else {
      location.marker.setVisible(false)
      }
    })
    this.setState({
      locations: locations,
      query: query
    })
  }

  render() {
    return (
      <div className="sidebar-content">
        <div className="search-place-wrapper">
          <input
            role="searchinputfield"
            className="search-input"
            type="text"
            placeholder="Search by name"
            onChange={event => this.updateQuery(event.target.value)}
          />
          <button className="filter-btn">
            Filter
          </button>
        </div>
        <div className="list-wrapper">
          <ul role="listoflocationsnames">
            {this.state.locations.map((location, index) => (
              <Location 
                key={index}
                location={location}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
