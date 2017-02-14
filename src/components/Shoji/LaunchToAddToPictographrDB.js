import React from 'react';

export default class LaunchToAddToPictographrDB extends React.Component {
  launchNewPictographr() {
    this.props.launchPictographrFile(true);
  }

  render() {
    const logoFileId = this.props.site.logoUrl.split('=')[1];
    const imgStyle = {
      display: 'block',
      margin: 'auto auto',
      maxWidth: '375px',
    };
    const divStyle = {
      marginTop: '100px',
      textAlign: 'center'
    };
    const buttonStyle = {
      padding: '8px 25px',
      fontSize: '22px',
      lineHeight: 'normal',
      '-webkit-border-radius': '8px',
         '-moz-border-radius': '8px',
              'border-radius': '8px',
    };

    return (
      <div style={divStyle}>
        <img
          id="logo"
          alt=""
          style={imgStyle}
          src={`${resources}img/logo/${logoFileId}.png`}
        />
        <img id="signupImg" className="img-responsive" style={imgStyle} alt='' src='img/sitesplash.png' />
        <button
          id="new-design-button"
          style={buttonStyle}
          className='btn btn-primary btn-large'
          onClick={this.launchNewPictographr.bind(this)}
        >
        Launch
        </button>
      </div>
    );
  }
}
