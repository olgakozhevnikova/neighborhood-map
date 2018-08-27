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
		let activeLocation
		if (query) {
      // 'i' says to ignore case
      // escapeRegExp says: if there are any special characters (backslash, etc) inside the query,
      // then go ahead and escape them,
      // so we use those special characters as a string literal
    	// rather than these special regexp characters
      const match = new RegExp(escapeRegExp(query), 'i')
			activeLocation = this.state.locations.filter((location) => {
				match.test(location.name)
				location.marker.setVisible(true);
			})
			this.setState({
				locations: activeLocation,
				query: query
			})
    } else {
			activeLocation = this.state.locations
			this.setState({
				locations: this.props.locations,
				query: ''
			})
    }
	}

	clearQuery = () => {
    this.setState({ query: '' })
	}

	render() {
		return (
			<div className="sidebar-content">
				<div className="search-place-wrapper">
					<input
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
					<ul>
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
