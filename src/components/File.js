import React from 'react';
import { setActiveFileId } from '../actions/filesActions';

export default class File extends React.Component {

  launchPictographrFile() {
    this.props.dispatch(setActiveFileId(this.props.file.id));
    this.props.launchPictographrFile();
  }

  render() {
    const inlineImgStyle = {
      cursor: 'zoom-in'
    };

    const src = `https://pictographr.com/temp/templates/${this.props.file.id}.png`;

    return (
      <div className='col-md-3'>
          <a className='thumbnail'>
              <img
                src={src}
                alt='ALT NAME'
                style={inlineImgStyle}
              />
              <div className='caption'>
              <h4>{this.props.file.title}</h4>
              <p>
                  {
                    this.props.loggedIn ?
                      <button
                        className='btn btn-primary btn-sm'
                        onClick={this.launchPictographrFile.bind(this)}
                      >Edit</button>
                    :
                      <button
                        data-toggle='modal'
                        data-target='#signupScreen'
                        className='btn btn-primary btn-sm'
                      >Edit</button>
                  }
              </p>
            </div>
          </a>
      </div>
    );
  }
}
