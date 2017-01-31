import React from 'react';

export default class Logo extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar-banner">
          <a
            className="navbar-brand"
          >
            <img id="logo" alt="" src={`${resources}img/logo.png`} />
          </a>
        </div>
      </div>
    );
  }
}
