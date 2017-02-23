import React from 'react';
import classStyle from './Logo.css';

export default class Logo extends React.Component {

  render() {
    const logoFileId = this.props.site.logoUrl.split('=')[1];
    const resources = (window.location.hostname.split('.')[0] === 'localhost' ?
            host
          + 'sites/'
          + site
          + '/'
    :
            host
          + 'sites/'
          + site
          + subdomainSegment
    );
    return (
      <div>
        <div className={`${classStyle.navbarBanner} navbar-banner`}>
          <a
            className={`${classStyle.navbarBrand} navbar-brand`}
          >
            <img
              id="logo"
              alt=""
              className={classStyle.logo}
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
