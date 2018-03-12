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

  handleAdoption = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handleFilterChange = (value) => {
      this.setState({
        filters: Object.assign({}, this.state.filters, {
          type: value,
        })
      })
  }

  handleFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => {
        this.setState({pets: json})
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(json => {
        this.setState({pets: json})
      })
    }
  }

  render() {
    console.log(this.state.adoptedPets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.handleFindPetsClick} onChangeType={this.handleFilterChange}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
