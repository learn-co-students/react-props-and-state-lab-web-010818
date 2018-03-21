import React from 'react';
import uuid from 'uuid';

import Pet from './Pet';





class PetBrowser extends React.Component {

  // const pets = this.props.pets.map(pet => {
  //   const id = pet.id
  //   return <Pet key={id} pet={pet} />
  //
  // })


  // const pets = this.props.pets.map(pet => {
  //   const id = pet.id
  //   return (<Pet key={id} pet={pet} />)
  // })


  render() {
  //console.log(this.props.pets)
    const pets = this.props.pets.map(pet => {
      const id = pet.id
      return <Pet key={id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(id)} />

    })

    return (

      <div className="ui cards">
      {pets}
      </div>
    );
  }
}

export default PetBrowser;
