import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  state = {
    pets: [],
    adoptedPets: [],
    filters: { type: 'all' }
  }

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({ pets: json}));
  }

  componentDidMount() {
    this.fetchPets();
  }

  handleFilter = (type) => {
    this.setState({ filters: Object.assign({}, {type: type} )});
  }

  adoptPet = (petId) => {
    this.setState({ adoptedPets: [...this.state.adoptedPets, petId] })
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
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
