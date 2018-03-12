import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map(pet => {
      if (this.props.adoptedPets.includes(pet.id)){
        return <Pet pet={pet} isAdopted={true} onAdoptPet={this.props.onAdoptPet}/>
      } else {
        return <Pet pet={pet} isAdopted={false} onAdoptPet={this.props.onAdoptPet}/>
      }
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
