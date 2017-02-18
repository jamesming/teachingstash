import React from 'react';
import Indicator from './Indicators';
import Slide from './Slide';

export default class Carousel extends React.Component {

  render() {
    const leftStyle = {
      left: '-75px'
    };
    const rightStyle = {
      right: '-75px'
    };
    const inlineStyle = {
      maxWidth: '550px'
    };
    const alineStyle = {
      background: 'none'
    };
    const Slides = this.props.slides.map((slide, idx) =>
      <Slide
        key={idx}
        idx={idx}
        fileId={slide.id}
        title={slide.title}
      />
    );
    const Indicators = this.props.slides.map((slide, idx) =>
        <Indicator
          key={idx}
          idx={idx}
          fileId={slide.fileId}
        />
    );
    return (
      <div
        id="carousel-example-generic"
        className="carousel slide" data-ride="carousel" style={inlineStyle}
      >
        <ol className="carousel-indicators">
          {Indicators}
        </ol>
        <div className="carousel-inner" role="listbox">
          {Slides}
        </div>
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button" data-slide="prev"
          style={alineStyle}
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
            style={leftStyle}
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button" data-slide="next"
          style={alineStyle}
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
            style={rightStyle}
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
