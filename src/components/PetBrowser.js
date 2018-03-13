import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {


  checkAdoption(petID) {
    return this.props.adoptedPets.includes(petID)
  }

  // petInfo = (pet) => {
  //   name:{pet.name},
  //   type:{pet.type},
  //   age:{pet.age}
  //   weight:{pet.weight}
  //   gender:{pet.gender}
  //   petId:{pet.id}
  //   key:{pet.id}
  //   isAdopted:{this.checkAdoption(pet.id)}
  //   onAdoptPet:{this.onAdoptPet}
  // }

  render() {
    console.log(this.props.adoptedPets)
    const pets = this.props.pets
    const petItems = () => {
      return pets.map(pet => {
        return <Pet key={pet.id} pet={pet} isAdopted={this.checkAdoption(pet.id)} onAdoptPet={this.props.onAdoptPet}/>
      })
    }
    return (
      <div className="ui cards">
        {petItems()}
      </div>
    );
  }
}

export default PetBrowser;
