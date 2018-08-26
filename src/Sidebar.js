import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'

export class Sidebar extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
    this.setState({ query: query.trim() })
	}
	
	clearQuery = () => {
    this.setState({ query: '' })
  }

	render() {
		const { places } = this.props
		const { query } = this.state

		let showingPlaces

    if (query) {
      // 'i' says to ignore case
      // escapeRegExp says: if there are any special characters (backslash, etc) inside the query,
      // then go ahead and escape them,
      // so we use those special characters as a string literal
      // rather than these special regexp characters
      const match = new RegExp(escapeRegExp(query), 'i')
      showingPlaces = places.filter((place) => match.test(place.name))
    } else {
      showingPlaces = places
    }

		return (
			<div className="sidebar-content">
				<div className="search-place-wrapper">
					<input
						className="search-input"
						type="text"
						placeholder="Search by name"
						value={this.state.query}
						onChange={event => this.updateQuery(event.target.value)}
					/>
					<button className="filter-btn">
						Filter
					</button>
				</div>
				<div className="list-wrapper">
					<ul>
						{showingPlaces.map(place => (
							<li className="list-item" key={place.name}>
								{place.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Sidebar