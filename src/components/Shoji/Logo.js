import React from 'react';
import classStyle from './Logo.css';

export default class Logo extends React.Component {

  render() {
    const logoFileId = this.props.site.logoUrl.split('=')[1];
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
                    `${host}${sites}/${site}${subdomainSegment}img/logo/${logoFileId}.png`
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
