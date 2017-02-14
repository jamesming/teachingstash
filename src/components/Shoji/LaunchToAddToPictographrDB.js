import React from 'react';

export default class LaunchToAddToPictographrDB extends React.Component {
  launchNewPictographr() {
    this.props.launchPictographrFile(true);
  }

  render() {
    const buttonStyle = {
      float: 'right',
      marginTop: '14px',
      marginRight: '10px'
    };
    const logoFileId = this.props.site.logoUrl.split('=')[1];
    const imgStyle = {
      display: 'block',
      margin: 'auto auto',
      maxWidth: '375px',
    };

    return (
      <div>
        <img
          id="logo"
          alt=""
          style={imgStyle}
          src={`${resources}img/logo/${logoFileId}.png`}
        />
        <img id="signupImg" className="img-responsive" style={imgStyle} alt='' src='img/sitesplash.png' />
        <button
          id="new-design-button"
          className='btn btn-primary btn-sm'
          onClick={this.launchNewPictographr.bind(this)}
          style={buttonStyle}
        >
        New Design
        </button>
      </div>
    );
  }
}
