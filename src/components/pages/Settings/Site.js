import React from 'react';
import { setMeta } from '../../../actions/siteActions';

export default class Site extends React.Component {
  setMeta() {
    $('#setmeta-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);
    this.props.dispatch(setMeta(
        this.refs.description.value,
        this.refs.keywords.value,
        this.refs.title.value,
        () => {$('#setmeta-button').removeClass('waiting').text(`
          Submit
        `);
    }));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="well well-sm">
              <form className="form-horizontal" action="" method="post">
              <fieldset>
                <legend className="text-center">Site Configuration</legend>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Title</label>
                  <div className="col-md-7">
                    <input
                      id="title"
                      className="form-control"
                      name="title"
                      ref="title"
                      type="text"
                      placeholder="Title"
                      value={this.props.site.title}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="message">Description</label>
                  <div className="col-md-7">
                    <textarea
                      id="description"
                      className="form-control"
                      name="description"
                      ref="description"
                      rows="5"
                      placeholder="Describe the website."
                      value={this.props.site.description}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="message">Keywords</label>
                  <div className="col-md-7">
                    <textarea
                      id="keywords"
                      className="form-control"
                      name="keywords"
                      rows="5"
                      ref="keywords"
                      placeholder="Enter keywords separated with commas."
                      value={this.props.site.keywords}
                  />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 text-right">
                    <button
                      id="setmeta-button"
                      ref="setmeta-button"
                      type="submit"
                      className="btn btn-primary btn-sm"
                      onClick={this.setMeta.bind(this)}
                    >Submit</button>
                  </div>
                </div>
              </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
