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
    }
  };

  fetchPets = () => {
    let url = '/api/pets';
    console.log("type:", this.state.filters.type)
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(petsCollection => {
        this.setState({ pets: petsCollection })
      });
  }

  onChangeType = (newType) => {
    console.log("newType:", newType)
    this.setState({ filters: Object.assign({}, this.state.filters, { type: newType }) })
  }

  handleAdoptPet = (id) => {
    console.log("id:", id)
    console.log("included?", this.state.adoptedPets.includes(id))
    if (!this.state.adoptedPets.includes(id)) {
      this.setState({ adoptedPets: [...this.state.adoptedPets, id]})
    }
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
               <Filters filters={this.state.filters}
                        onChangeType={this.onChangeType}
                        onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
               <PetBrowser pets={this.state.pets}
                           adoptedPets={this.state.adoptedPets}
                           onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
