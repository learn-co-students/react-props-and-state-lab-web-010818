import React from 'react';
import Pet from './Pet';


export default class PetBrowser extends React.Component {
  generatePetCards = () => {
    
  }

  render() {
    return (
      <div className="ui cards">
        <Pet />
      </div>
    );
  }
}
