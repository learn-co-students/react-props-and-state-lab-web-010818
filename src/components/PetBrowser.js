import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map(pet =>
      this.props.adoptedPets.includes(pet.id) ? <Pet pet={pet} isAdopted={true} onAdoptPet={this.props.onAdoptPet}/> : <Pet pet={pet} isAdopted={false} onAdoptPet={this.props.onAdoptPet}/>
    )
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
// {pets}
