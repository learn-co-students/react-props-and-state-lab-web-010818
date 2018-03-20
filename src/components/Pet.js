import React from 'react';

class Pet extends React.Component {
  state = {
    isAdopted: this.props.isAdopted
  }
  adoptPet = () => {
    console.log(this.props.id);
    this.props.onAdoptPet(this.props.id)
    this.setState({
      isAdopted: true
    })
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.name} {this.props.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">{this.props.type} </span>
          </div>
          <div className="description">
            <p>Age: {this.props.age} </p>
            <p>Weight: {this.props.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {!this.state.isAdopted ? (
            <button className="ui primary button" onClick={this.adoptPet} >Adopt pet</button>
          ) : (
            <button className="ui disabled button">Already adopted</button>
          ) }


        </div>
      </div>
    );
  }
}

export default Pet;
