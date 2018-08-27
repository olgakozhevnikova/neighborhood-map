import React, { Component } from 'react'

export class Sidebar extends Component {
	constructor(props) {
    super(props);
    this.state = {
			query: '',
      locations: ''
    }

    // this.filterLocations = this.filterLocations.bind(this);
  }

	updateQuery = (query) => {
		var locations = [];
    this.props.alllocations.forEach(function(location) {
      if (location.longname.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        location.marker.setVisible(true);
        locations.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });

    this.setState({
      locations: locations,
      query: query
    });
	}
	
	clearQuery = () => {
    this.setState({ query: '' })
	}
	
	componentWillMount() {
    this.setState({
      locations: this.props.alllocations
    });
  }


	render() {
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
					{/*   */}
				</div>
			</div>
		)
	}
}

export default Sidebar