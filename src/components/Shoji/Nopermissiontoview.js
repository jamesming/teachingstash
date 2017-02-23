import React from 'react';
import classStyle from './Nopermissiontoview.css';

export default class Nopermissiontoview extends React.Component {

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
      <div className={classStyle.middleDiv}>
    		<div  className={classStyle.head}>
    			Restricted Access
    		</div>
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
      </div>
    );
  }
}
