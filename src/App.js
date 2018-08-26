import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'places': [
        {
          'name': 'TRINITY coworking space',
          'lat': '12.95628',
          'lng': '77.636616',
          'address': '26/A, 1st floor, Patel Ram Reddy Rd',
          'phone': '078998 29580'
        },
        {
          'name': 'Bangalore Coworking Hub',
          'lat': '12.96127',
          'lng': '77.647449',
          'address': 'A, Behind, 2124, Leela Palace Rd, HAL 3rd Stage, Kodihalli, Bengaluru, Karnataka 560008',
          'phone': '099024 32565'
        },
        {
          'name': 'Bhive Workspace Indiranagar',
          'lat': '12.96903',
          'lng': '77.636409',
          'address': 'No 25, 12th B Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
          'phone': '080888 22364'
        },
        {
          'name': 'BHIVE Workspace Koramangala',
          'lat': '12.940334',
          'lng': '77.621846',
          'address': 'No. 269, Behind Station, 18th D Main Road, 6th Block, Koramangala, Bengaluru, Karnataka 560095',
          'phone': '080888 22364'
        },
        {
          'name': 'InstaOffice',
          'lat': '12.969708',
          'lng': '77.63611',
          'address': '1st Floor, Citadel Plaza, Indiranagar Double Road, Dopanhalli, Indiranagar, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560008',
          'phone': '099585 63555'
        },
        {
          'name': 'Beginest',
          'lat': '12.969328',
          'lng': '77.640778',
          'address': '783, 1st Cross Rd, 1st Block, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560008',
          'phone': '091080 29762'
        },
        {
          'name': 'Common Desk',
          'lat': '12.976683',
          'lng': '77.635627',
          'address': '271, 1st Floor,14th Cross Rd, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038',
          'phone': '099868 88639'
        },
        {
          'name': 'TechHub Bangalore',
          'lat': '12.933656',
          'lng': '77.614492',
          'address': '3rd Floor, Salarpuria Business Center, 4th B Cross, 5th Block, Industrial Layout, Bengaluru, Karnataka 560095',
          'phone': '080507 00113'
        },
        {
          'name': 'Commune Coworks',
          'lat': '12.933794',
          'lng': '77.620955',
          'address': '139, First Cross Road, V Block, A Cross Road, Koramangala, Bengaluru, Karnataka 560095',
          'phone': '088805 00175'
        },
        {
          'name': 'CoWorkIndia',
          'lat': '12.914581',
          'lng': '77.638584',
          'address': '#5, 14th Main Road, 15th Cross Rd, HSR Layout, Bengaluru, Karnataka 560102',
          'phone': '077601 51525'
        }
      ] 
    }
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
