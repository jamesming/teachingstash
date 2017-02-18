import React from 'react';

export default class Slide extends React.Component {

  render() {
    const style = {
      display: 'none'
    };
    return (
      <div
        className={this.props.idx === 0 ? 'item active' : 'item '}
      >
        <img alt="" src={`${resources}carousel/pngs/${this.props.fileId}.png`} />
        <div
          style={style}
          className="carousel-caption"
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}
