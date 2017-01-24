import React from 'react';

export default class Signup extends React.Component {

  render() {
    const imgStyle = {
      display: 'block',
      margin: 'auto auto',
      maxWidth: '375px',
    };

    const buttonStyle = {
      cursor: 'pointer',
      display: 'block',
      margin: '40px auto',
      width: '245px'
    };

    return (
      <div>
        <img id="signupImg" className="img-responsive" style={imgStyle} alt='' src='https://pictographr.com/img/splash4uwp.png' />
        <img
          alt=''
          id="signupButton"
          onClick={this.props.popGoogleSignIn}
          ref="signupButton"
          style={buttonStyle}
          src="https://pictographr.com/img/loginGoogle.png"
        />
      </div>
    );
  }
}
