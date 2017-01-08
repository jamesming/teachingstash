import React from 'react';

export default class File extends React.Component {

  launchPictographrFile() {
    this.props.launchPictographrFile(this.props.file.id);
  }

  render() {
    const src = `https://pictographr.com/temp/templates/${this.props.file.id}.png`;

    return (
      <div className='col-md-3'>
          <a className='thumbnail'>
              <img src={src} alt='ALT NAME' />
              <div className='caption'>
              <h4>{this.props.file.title}</h4>
              <p>
                <button
                  className='btn btn-primary btn-sm'
                  target='_top'
                  onClick={this.launchPictographrFile.bind(this)}
                >Launch</button>
              </p>
            </div>
          </a>
      </div>
    );
  }
}
