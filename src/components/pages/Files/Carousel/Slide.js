import React from 'react';

export default class Slide extends React.Component {

  render() {
    return (
      <div className={this.props.slides[0].id === this.props.fileId ? 'item active' : 'item '}>
        <img alt="" src={`${feedersite}carousel/${this.props.fileId}.png`} />
        <div className="carousel-caption">
          carousel-caption
        </div>
      </div>
    );
  }
}
