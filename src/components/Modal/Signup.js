import React from 'react';

export default class Signup extends React.Component {

  render() {
    const imgStyle = {
      display: 'block',
      margin: 'auto auto',
      maxWidth: '375px',
    };

    return (
      <div>
        <img id="signupImg" className="img-responsive" style={imgStyle} alt='' src='https://pictographr.com/img/splash4uwp.png' />
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
