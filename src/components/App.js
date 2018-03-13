import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = value => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  onFindPetsClick = () => {
    const filter = this.state.filters.type
    let baseUrl = '/api/pets'
    if (filter !== 'all') {
      baseUrl += `?type=${filter}`
    }
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => this.setState({
        pets:json
      }))
  }

  onAdoptPet = id => {
    let currentAdopted = [...this.state.adoptedPets,id]
    this.setState({
      adoptedPets:currentAdopted
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
