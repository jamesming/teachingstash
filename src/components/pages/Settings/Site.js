import React from 'react';

export default class Site extends React.Component {

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
                      ref="title"
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Title"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="message">Description</label>
                  <div className="col-md-7">
                    <textarea
                      ref="description"
                      className="form-control"
                      id="description"
                      name="description"
                      placeholder="Describe site.."
                      rows="5"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="message">Keywords</label>
                  <div className="col-md-7">
                    <textarea
                      ref="keywords"
                      className="form-control"
                      id="keywords"
                      name="keywords"
                      placeholder="Please enter your message here..."
                      rows="5"
                  />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
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
