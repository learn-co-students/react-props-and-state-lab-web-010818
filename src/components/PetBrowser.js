import React from 'react';
import Pet from './Pet';


export default class PetBrowser extends React.Component {

  generatePetCards = () => {
    return this.props.pets.map(p => (
      <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(p.id)} />
    ));
  }

  render() {
    return (
      <div className="ui cards">
        {this.generatePetCards()}
      </div>
    );
  }
}
