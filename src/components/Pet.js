import React from 'react';



class Pet extends React.Component {
  constructor() {
    super();
  }


  onAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }



  render() {
    const gender = this.props.pet.gender === "female" ? '♀' : '♂'

    return (
      <div className="card">
        <div className="content">
          <a className="header"> Name: {this.props.pet.name}</a>
          <p>Gender: {gender}</p>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted ?
            <button className="ui disabled button">Already adopted</button>
            :
            <button
              className="ui primary button"
              onClick={this.onAdoptPet}
            >
              Adopt pet
            </button>
            }
        </div>
      </div>
    );
  }
}

export default Pet;
