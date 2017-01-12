import React from 'react';

export default class Signup extends React.Component {

  render() {
    const imgStyle = {
      margin: 'auto auto',
      display: 'block'
    };

    return (
      <div>
        <img className="img-responsive" style={imgStyle} alt='' src='http://placehold.it/500x500' />
        <button onClick={this.props.popGoogleSignIn} >
          Sign In with Google
        </button>
      </div>
    );
  }
}
