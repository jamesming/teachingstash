import React from 'react';
import {
  renderLogo,
  setSite,
  setDescription,
  setKeywords,
  setLogoUrl,
  setTitle,
  setOrganizationName,
  setOrganizationId,
} from '../../../actions/siteActions';

export default class Site extends React.Component {
  setLogoUrl(e) {
    this.props.dispatch(setLogoUrl(e.target.value));
  }
  setKeywords(e) {
    this.props.dispatch(setKeywords(e.target.value));
  }
  setDescription(e) {
    this.props.dispatch(setDescription(e.target.value));
  }
  setOrganizationName(e) {
    this.props.dispatch(setOrganizationName(e.target.value));
  }
  setOrganizationId(e) {
    this.props.dispatch(setOrganizationId(e.target.value));
  }
  setTitle(e) {
    this.props.dispatch(setTitle(e.target.value));
  }
  generateSite() {
    $('#setsite-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);
    const logoFileId = this.refs.logoUrl.value.split('=')[1];

    const logoPromise = new Promise((resolve, reject) => {
      this.props.dispatch(renderLogo(
          logoFileId,
          () => {
            resolve('logoPromise');
      }));
    });
    const sitePromise = new Promise((resolve, reject) => {
      this.props.dispatch(setSite(
          this.refs.title.value,
          this.refs.description.value,
          this.refs.keywords.value,
          this.refs.organizationId.value,
          this.refs.organizationName.value,
          () => {
            resolve('sitePromise');
      }));
    });

    Promise.all([logoPromise, sitePromise]).then((data) => {
      $('#setsite-button').removeClass('waiting').text(`
        Submit
      `);
      this.props.toast('This site has been reset with new configuration.  Site will reload in two seconds.');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });

  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="well well-sm">
              <form className="form-horizontal" action="" method="post">
              <fieldset>
                <legend className="text-center">Set Site Detail</legend>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Logo Url</label>
                  <div className="col-md-7">
                    <input
                      id="logoUrl"
                      className="form-control"
                      name="logoUrl"
                      onChange={this.setLogoUrl.bind(this)}
                      ref="logoUrl"
                      type="text"
                      placeholder="Enter Logo Url"
                      value={this.props.site.logoUrl}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Organization Name</label>
                  <div className="col-md-7">
                    <input
                      id="title"
                      className="form-control"
                      name="title"
                      onChange={this.setOrganizationName.bind(this)}
                      ref="title"
                      type="text"
                      placeholder="Name of Organization"
                      value={this.props.site.organizationName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Organization_id</label>
                  <div className="col-md-7">
                    <input
                      id="organizationId"
                      className="form-control"
                      name="organizationId"
                      onChange={this.setOrganizationId.bind(this)}
                      ref="organizationId"
                      type="text"
                      placeholder="Please ask Pictographr Support to provide this."
                      value={this.props.site.organization_id}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Title</label>
                  <div className="col-md-7">
                    <input
                      id="title"
                      className="form-control"
                      name="title"
                      onChange={this.setTitle.bind(this)}
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
                      onChange={this.setDescription.bind(this)}
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
                      onChange={this.setKeywords.bind(this)}
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
                      id="setsite-button"
                      className="btn btn-primary btn-sm"
                      onClick={this.generateSite.bind(this)}
                      ref="setsite-button"
                      type="button"
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
