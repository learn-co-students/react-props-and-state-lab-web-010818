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
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({ pets: json}));
  }

  componentDidMount() {
    this.fetchPets();
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
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
