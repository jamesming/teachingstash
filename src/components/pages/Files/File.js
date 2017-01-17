import React from 'react';
import { setActiveFileId } from '../../../actions/filesActions';
import { renderPNGandPullAssetsJson } from '../../../actions/templatesActions';
import { setModalShow } from '../../../actions/appActions';

export default class File extends React.Component {

  setActiveFileId() {
    this.props.dispatch(setActiveFileId(this.props.file.id));
  }

  setModalSignup() {
    this.setActiveFileId();
    this.props.dispatch(setModalShow('signup'));
  }

  setModalPreview() {
    this.props.slideFolderMenu();
    if (this.props.assets[this.props.file.id] &&
        this.props.assets[this.props.file.id].png) {
      this.setActiveFileId();
      this.props.dispatch(setModalShow('preview'));
      $('#modalScreen').modal('show');
    } else {
      this.setActiveFileId();
      this.props.dispatch(renderPNGandPullAssetsJson(this.props.file.id, () => {
        this.setActiveFileId();
        this.props.dispatch(setModalShow('preview'));
        $('#modalScreen').modal('show');
        console.log('rendered');
      }));
    }
  }

  launchPictographrFile() {
    this.props.dispatch(setActiveFileId(this.props.file.id));
    this.props.launchPictographrFile();
  }

  render() {
    const inlineImgStyle = {
      cursor: 'zoom-in'
    };

    const src = `${window.feedersite}thumbs/${this.props.file.id}.png`;

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
                        onClick={this.setModalSignup.bind(this)}
                        data-toggle='modal'
                        data-target='#modalScreen'
                        className='btn btn-primary btn-sm'
                      >Edit</button>
                  }
                  <button
                    onClick={this.setModalPreview.bind(this)}
                    // data-toggle='modal'
                    // data-target='#modalScreen'
                    className='btn btn-primary btn-sm'
                  >Preview</button>
              </p>
            </div>
          </a>
      </div>
    );
  }
}
