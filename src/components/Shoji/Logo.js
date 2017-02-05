import React from 'react';

export default class Logo extends React.Component {

  render() {
    const logoFileId = this.props.site.logoUrl.split('=')[1];
    return (
      <div>
        <div className="navbar-banner">
          <a
            className="navbar-brand"
          >
            <img
              id="logo"
              alt=""
              src={
                  typeof (logoFileId) !== 'undefined'
                  ?
                    `${resources}img/logo/${logoFileId}.png`
                  :
                    ''
              }
            />
          </a>
        </div>
      </div>
    );
  }
}
