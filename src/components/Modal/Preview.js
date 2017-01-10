import React from 'react';

export default class Preview extends React.Component {

  render() {
    const imgStyle = {
      margin: 'auto auto',
      display: 'block'
    };

    return (
      <div>
        <img style={imgStyle} alt='' src='http://placehold.it/300x250' />
      </div>
    );
  }
}
