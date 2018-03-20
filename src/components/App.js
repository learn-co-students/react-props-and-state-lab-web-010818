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

  fetchPets = () => {
    let fetchURL = '/api/pets'
    let filter = this.state.filters.type
    if (filter !== 'all') {
      fetchURL += `?type=${filter}`
    }
    fetch(fetchURL)
      .then(res => res.json())
      .then(json => {
          this.setState({pets: json})
        }
      )
  }

  filter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  adoptPet = (pet) => {
    let newArray = [...this.state.adoptedPets, pet]
    this.setState({
      adoptedPets: newArray
    })
    console.log(this.state.adoptedPets);
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
              <Filters onChangeType={this.filter} onFindPetsClick={this.fetchPets} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
