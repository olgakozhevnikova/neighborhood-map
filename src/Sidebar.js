import React, { Component } from 'react';

export class Sidebar extends Component {
	state = {
		query: '',
		searchedPlace: []
	}

	render() {
		const { places } = this.props
		console.log(places)

		return (
			<div className="sidebar-content">
				<div className="search-place-wrapper">
					<input
						className="search-input"
						type="text"
						placeholder="Search by name"
						value={this.state.query}
						onChange={this.searchPlace}
					/>
					<button className="filter-btn">
						Filter
					</button>
				</div>
				<div className="list-wrapper">
					<ul>
						{places.map(place => (
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