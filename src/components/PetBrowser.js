import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  isPetAdopted = (pet) => {
    if (this.props.adoptedPets.includes(pet)) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              type={pet.type}
              gender={pet.gender}
              age={pet.age}
              weight={pet.weight}
              name={pet.name}
              isAdopted={this.isPetAdopted(pet)}
              onAdoptPet={this.props.onAdoptPet}
            />
          )
        })
      }
      </div>
    );
  }
}

export default PetBrowser;
