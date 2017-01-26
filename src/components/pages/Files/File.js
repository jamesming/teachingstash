import React from 'react';
import { setActiveFileId } from '../../../actions/filesActions';
import { setSession } from '../../../actions/userActions';
import {
    renderPNGandPullAssetsJson,
    renderPDFandPullAssetsJson
} from '../../../actions/templatesActions';
import { setModalShow } from '../../../actions/appActions';

export default class File extends React.Component {

  setActiveFileId() {
    this.props.dispatch(setActiveFileId(this.props.file.id));
  }

  setModalSignup() {
    //this.setActiveFileId();
    this.props.dispatch(setModalShow('signup'));
  }

  setModalPreview() {
    this.props.slideFolderMenu();
    if (this.props.assets[this.props.file.id] &&
        this.props.assets[this.props.file.id].png) {
      this.setActiveFileId();
      this.props.dispatch(setModalShow('preview'));
      $('#modalScreen').modal('show');
      // this.toast('Please click edit now.');
      // const $selector = $(`#edit-button-${this.props.file.id}`);
      // this.animateElement($selector);
    } else {
      var selectorIs = `#${this.props.file.id}_preview_button`;
      $(selectorIs).addClass('waiting').html(`
        <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
      `);
      this.props.dispatch(renderPNGandPullAssetsJson(this.props.file.id, () => {
        const img = new Image();
        this.setActiveFileId();

        img.onload = () => {
          this.props.dispatch(setModalShow('preview'));
          $('#modalScreen').modal('show');
          $(selectorIs).removeClass('waiting').text(`
            Preview
          `);
        };

        img.src = `${window.feedersite}pngs/${this.props.file.id}.png`;
      }));
    }
  }

  animateElement($selector) {
    $selector.addClass('animated rotateIn');
    setTimeout( () => {
      $selector.removeClass('animated rotateIn');
    }, 15000);
  }

  download(blobUrl, filename) {
    const a = document.createElement('a');

    if (a.click) {
      a.href = blobUrl;
      a.target = '_parent';

      if ('download' in a) {
        a.download = filename;
      }(
          document.body || document.documentElement).appendChild(a);
          a.click();
          a.parentNode.removeChild(a);
      } else {
        if (window.top === window &&
          blobUrl.split('#')[0] === window.location.href.split('#')[0]) {
        const padCharacter = blobUrl.indexOf('?') === -1 ? '?' : '&';
        const blobUrl = blobUrl.replace(/#|$/, padCharacter + '$&');
      }
      window.open(blobUrl, '_parent');
    }
  }

  printPDF() {
    if (this.props.assets[this.props.file.id] &&
        this.props.assets[this.props.file.id].pdf) {
      const url = `${window.feedersite}pdfs/${this.props.file.id}.pdf`;
      console.log(url);
      this.download(url, 'something.pdf');
    } else {
    var selectorIs = `#${this.props.file.id}_print_button`;
      $(selectorIs).addClass('waiting').html(`
        <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
      `);

      this.props.dispatch(renderPDFandPullAssetsJson(this.props.file.id, () => {
        const url = `${window.feedersite}pdfs/${this.props.file.id}.pdf`;
        this.download(url, 'something.pdf');
        $(selectorIs).removeClass('waiting').text(`
          Print
        `);
      }));
    }
  }

  toast(message) {
    $.toast().reset('all');
    const options = {};
    options.text = message;
    options.stack = 12;
    options.loaderBg = '#4285F4';
    options.icon = 'success';
    options.heading = 'Success';
    options.hideAfter = 10000;
    $.toast(options);
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
    const inlineButtonStyle = {
      minWidth: '65px'
    }

    if (this.props.user.session === 'initiated') {
      this.toast('You can now click any Edit button to customize.');
      const $selector = $(`#edit-button-${this.props.activeFileId}`);
      this.animateElement($selector);
      $('#modalScreen').modal('hide');
      setTimeout(() => {
        this.props.dispatch(setSession('established'));
      }, 1000);
    }

    return (
      <div className='col-md-4'>
          <a className='thumbnail'>
              <img
                src={src}
                alt='ALT NAME'
                style={inlineImgStyle}
              />
              <div className='caption'>
              <h5><center>{this.props.file.title}</center></h5>
              <div>
                <center>
                  <p>
                        {
                          this.props.user.loggedIn ?
                            <button
                              id={`edit-button-${this.props.file.id}`}
                              className='edit-buttons btn btn-primary btn-sm'
                              onClick={this.launchPictographrFile.bind(this)}
                            >Edit</button>
                          :
                            <button
                              id={`edit-button-${this.props.file.id}`}
                              className='edit-buttons btn btn-primary btn-sm'
                              data-target='#modalScreen'
                              data-toggle='modal'
                              onClick={this.setModalSignup.bind(this)}
                            >Edit</button>
                        }
                        <button
                          style={inlineButtonStyle}
                          id={`${this.props.file.id}_preview_button`}
                          onClick={this.setModalPreview.bind(this)}
                          className='btn btn-primary btn-sm'
                        >
                          Preview
                        </button>
                        <button
                          id={`${this.props.file.id}_print_button`}
                          onClick={this.printPDF.bind(this)}
                          className='print-buttons btn btn-primary btn-sm'
                        >
                          Print
                        </button>
                  </p>
                </center>
              </div>
            </div>
          </a>
      </div>
    );
  }
}
