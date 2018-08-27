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

    // this.filterLocations = this.filterLocations.bind(this);
	}
	
	componentWillMount() {
		this.setState({ locations: this.props.locations })
	}

	// updateQuery = (query) => {
	// 	// if (query) {
  //   //   // 'i' says to ignore case
  //   //   // escapeRegExp says: if there are any special characters (backslash, etc) inside the query,
  //   //   // then go ahead and escape them,
  //   //   // so we use those special characters as a string literal
  //   //   // rather than these special regexp characters
  //   //   const match = new RegExp(escapeRegExp(query), 'i')
  //   //   showingContacts = contacts.filter((contact) => match.test(contact.name))
  //   // } else {
  //   //   showingContacts = contacts;
  //   // }
		
	// 	var locations = [];
  //   this.props.locations.forEach(function(location) {
  //     if (location.longname.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
  //       location.marker.setVisible(true);
  //       locations.push(location);
  //     } else {
  //       location.marker.setVisible(false);
  //     }
  //   });

	// 	if (query) {
	// 		this.setState({
	// 			locations: locations,
	// 			query: query
	// 		});
	// 	}
	// 	else {
	// 		this.setState({
	// 			locations: this.props.locations,
	// 			query: ''
	// 		});
	// 	}
    
	// }
	
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
						value={this.state.query}
						onChange={event => this.updateQuery(event.target.value)}
					/>
					<button className="filter-btn">
						Filter
					</button>
				</div>
				<div className="list-wrapper">
				<ul>
					{this.state.locations.map(location => {
						<Location 
							location={location}/>
					})}
				</ul>
				</div>
			</div>
		)
	}
}

export default Sidebar