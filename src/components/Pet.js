import React from 'react';

export default class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Age: </p>
            <p>Weight: </p>
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
