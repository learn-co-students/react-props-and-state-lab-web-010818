import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    let petArr = this.props.pets.map((animal) =>
      <Pet
        pet={animal}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(animal.id)}
      />
    );

    return (
      <div className="ui cards">
        {petArr}
      </div>
    );
  }
}

export default PetBrowser;
