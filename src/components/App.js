import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import allPets from '../data/pets'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'All'
      }
    };
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  onAdoptPet = (id) => {
    if (!this.isAdopted(id)) {
     this.setState({
        adoptedPets: [...this.state.adoptedPets, id]
      })
    }
  }

  isAdopted = (id) => {
    return this.state.adoptedPets.includes(id)
  }

  onFindPetsType = () => {
    const url = this.state.filters.type === 'All' ? '/api/pets' : '/api/pets?type=' + this.state.filters.type
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      pets: data
    }))
  }



  render() {
    console.log(this.state.pets)


    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} isAdopted={this.isAdopted}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
