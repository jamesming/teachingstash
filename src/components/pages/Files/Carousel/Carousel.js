import React from 'react';
import Indicator from './Indicators';
import Slide from './Slide';

export default class Carousel extends React.Component {

  render() {
    const inlineStyle = {
      maxWidth: '550px'
    };
    const Slides = this.props.slides.map((slide) =>
      <Slide
        key={slide.id}
        fileId={slide.id}
        slides={this.props.slides}
      />
    );
    var theIndicators = [];
    this.props.slides.forEach((slide, index) => {
      theIndicators.push(
        <Indicator
          idx={index}
          key={slide.fileId}
          fileId={slide.fileId}
          slides={this.props.slides}
        />
      );
    });
    const Indicators = this.props.slides.map((slide) =>
      <Indicator
        key={slide.id}
        fileId={slide.id}
        slides={this.props.slides}
      />
    );
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" style={inlineStyle}>
        <ol className="carousel-indicators">
          {theIndicators}
        </ol>
        <div className="carousel-inner" role="listbox">
          {Slides}
        </div>
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button" data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button" data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
