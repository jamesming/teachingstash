import React from 'react';
import { generateTemplates } from '../../../actions/templatesActions';

export default class Assets extends React.Component {
  generateTemplatesJson() {
    $('#generateTemplatesJson-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);
    this.props.dispatch(generateTemplates(this.refs['shared-templates'].value, () => {
      $('#generateTemplatesJson-button').removeClass('waiting').text(`
        Preview
      `);
    }));
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
                  value={this.props.parentFolderId}
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
                  id="carousel-templates"
                  className="form-control"
                  name="carousel-templates"
                  onChange={() => {

                  }}
                  placeholder="Carousel Folder URL"
                  ref="carouselfolder"
                  ref="carousel-templates"
                  type="text"
                  value=''
                />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 text-right">
                  <button
                    id="generateTemplatesJson-button"
                    className=" btn btn-primary btn-sm"
                    onClick={this.generateTemplatesJson.bind(this)}
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
