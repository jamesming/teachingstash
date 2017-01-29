import React from 'react';
import { generateTemplates } from '../../../actions/templatesActions';
import { generateCarousel } from '../../../actions/carouselActions';

export default class Assets extends React.Component {
  generateAssets() {
    $('#submit-assets-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);

    let templatesPromise = new Promise((resolve, reject) => {
      this.props.dispatch(generateTemplates(this.refs['shared-templates'].value, () => {
        resolve('promise1');
      }));
    });

    let carouselPromise = new Promise((resolve, reject) => {
      this.props.dispatch(generateCarousel(this.refs['carousel-images'].value, () => {
        resolve('promise2');
      }));
    });

    Promise.all([templatesPromise, carouselPromise]).then((data) => {
      $('#submit-assets-button').removeClass('waiting').text(`
        Submit
      `);
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="well well-sm">
            <form className="form-horizontal" action="" method="post">
            <fieldset>
              <legend className="text-center">Assets</legend>
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
                  onChange={() => {

                  }}
                  placeholder="Templates Folder URL"
                  ref="shared-templates"
                  type="text"
                  value={this.props.templatesParentFolderId}
                />
                </div>
              </div>
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
                  onChange={() => {

                  }}
                  placeholder="Carousel Folder URL"
                  ref="carousel-images"
                  type="text"
                  value={this.props.carouselParentFolderId}
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
