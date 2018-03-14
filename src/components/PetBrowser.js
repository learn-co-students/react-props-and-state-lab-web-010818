import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const allPets = this.props.pets.map( pet => {
      return <Pet pet={pet}
                  onAdoptPet={this.props.onAdoptPet}
                  key={pet.id}
                  isAdopted={this.props.adoptedPets.includes(pet.id)}
            />
    })
    return (
      <div className="ui cards">
        {allPets}
      </div>
    );
  }
}

export default PetBrowser;
