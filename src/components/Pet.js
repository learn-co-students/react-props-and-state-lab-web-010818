import React from 'react';

export default class Pet extends React.Component {

  showButton = () => {
    return this.props.isAdopted ? <button className="ui disabled button" >Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoptPet} >Adopt pet</button>
  }

  handleAdoptPet = () => {
    return this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀' }</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.showButton()}
        </div>
      </div>
    );
  }
}
