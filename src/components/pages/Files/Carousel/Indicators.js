import React from 'react';

export default class Indicators extends React.Component {

  render() {
    const liStyle = {
      border: '1px solid #DDDDDD'
    };
    return (
      <li
				style={liStyle}
        data-target="#carousel-example-generic"
        data-slide-to={this.props.idx}
        className={this.props.idx === 0 ? 'active' : ''}
      />
    );
  }
}
