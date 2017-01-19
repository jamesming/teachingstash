import React from 'react';

export default class Indicators extends React.Component {

  render() {
    return (
      <li
        data-target="#carousel-example-generic"
        data-slide-to={this.props.idx} className="active"
        className={this.props.slides[0].id === this.props.fileId ? 'active' : ''}
      />
    );
  }
}
