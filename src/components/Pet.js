import React from 'react';

export default class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.details.name} {this.props.details.gender === 'male' ? '♂' : '♀' }</a>
          <div className="meta">
            <span className="date">{this.props.details.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.details.age}</p>
            <p>Weight: {this.props.details.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}
