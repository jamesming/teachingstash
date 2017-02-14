import React from 'react';

export default class Signup extends React.Component {

  render() {
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
        <a href="https://pictographr.com">
          <img id="signupImg" className="img-responsive" style={imgStyle} alt='' src='img/sitesplash.png' />
        </a>
        <img
          alt=''
          className="signupButton"
          onClick={this.props.popGoogleSignIn}
          ref="signupButton"
          src="https://pictographr.com/img/loginGoogle.png"
        />
      </div>
    );
  }
}
