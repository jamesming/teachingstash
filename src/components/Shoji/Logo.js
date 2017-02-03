import React from 'react';

export default class Logo extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar-banner">
          <a
            className="navbar-brand"
          >
            <img id="logo" alt="" src={`${resources}img/logo/0B1nKK3UKG5hjRHctX0k5bk1ES0k.png`} />
          </a>
        </div>
      </div>
    );
  }
}
