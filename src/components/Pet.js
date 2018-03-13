import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const thisPet = this.props.pet
    const adoptionButton = () => {
      if(this.props.isAdopted) {
        return <button className="ui disabled button">Already adopted</button>
      } else {
        return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
      }
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">{thisPet.name} {thisPet.gender === 'female' ? '♀' : '♂'}</a>
          <div className="meta">
            <span className="date">{thisPet.type}</span>
          </div>
          <div className="description">
            <p>Age: {thisPet.age}</p>
            <p>Weight: {thisPet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptionButton()}
        </div>
      </div>
    );
  }
}

export default Pet;
