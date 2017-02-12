import React from 'react';
import classStyle from './Logo.css';

export default class Logo extends React.Component {

  render() {
    const logoFileId = this.props.site.logoUrl.split('=')[1];
    return (
      <div>
        <div className={`${classStyle.navbarBanner} navbar-banner`}>
          <a
            className={`${classStyle.navbarBand} navbar-brand`}
          >
            <img
              id="logo"
              alt=""
              src={
                  typeof (logoFileId) !== 'undefined'
                  ?
                    `${resources}img/logo/${logoFileId}.png`
                  :
                    'http://placehold.it/450x100'
              }
            />
          </a>
        </div>
      </div>
    );
  }
}
