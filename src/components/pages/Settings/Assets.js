import React from 'react';
import { generateTemplates, setTemplateFolderUrl, fetchAssets } from '../../../actions/templatesActions';
import { generateCarousel, setCarouselFolderUrl } from '../../../actions/carouselActions';

export default class Assets extends React.Component {

  setTemplateFolderUrl(e) {
    this.props.dispatch(setTemplateFolderUrl(e.target.value));
  }

  setCarouselFolderUrl(e) {
    this.props.dispatch(setCarouselFolderUrl(e.target.value));
  }

  generateAssets() {
    $('#submit-assets-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);

    const templatesFolderId = this.refs['shared-templates'].value.split('=')[1];

    const templatesPromise = new Promise((resolve, reject) => {
      this.props.dispatch(generateTemplates(templatesFolderId, () => {
        resolve('templatesPromise');
      }));
    });

    const carouselFolderId = this.refs['carousel-images'].value.split('=')[1];

    const carouselPromise = new Promise((resolve, reject) => {
      this.props.dispatch(generateCarousel(carouselFolderId, () => {
        resolve('carouselPromise');
      }));
    });

    const getAssetsPromise = new Promise((resolve, reject) => {
      this.props.dispatch(fetchAssets(() => {
        resolve('getAssetsPromise');
      }));
    });

    Promise.all([templatesPromise, carouselPromise, getAssetsPromise]).then((data) => {
      $('#submit-assets-button').removeClass('waiting').text(`
        Submit
      `);
      this.props.toast('All assets have been retrieved.');
    });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="well well-sm">
            <form className="form-horizontal" action="" method="post">
            <fieldset>
              <legend className="text-center">Set Shared Folders</legend>
              <div className="form-group">
                <label
                  className="col-md-3 control-label"
                  htmlFor="name"
                >Carousel Folder URL</label>
                <div className="col-md-7">
                  <input
                    id="carousel-images"
                    className="form-control"
                    name="carousel-images"
                    onChange={this.setCarouselFolderUrl.bind(this)}
                    placeholder="Carousel Folder URL"
                    ref="carousel-images"
                    type="text"
                    value={this.props.carouselParentFolderUrl}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-md-3 control-label"
                  htmlFor="name"
                >Templates Folder URL</label>
                <div className="col-md-7">
                  <input
                    id="shared-templates"
                    className="form-control"
                    name="shared-templates"
                    onChange={this.setTemplateFolderUrl.bind(this)}
                    placeholder="Templates Folder URL"
                    ref="shared-templates"
                    type="text"
                    value={this.props.templatesParentFolderUrl}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 text-right">
                  <button
                    id="submit-assets-button"
                    className=" btn btn-primary btn-sm"
                    onClick={this.generateAssets.bind(this)}
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
