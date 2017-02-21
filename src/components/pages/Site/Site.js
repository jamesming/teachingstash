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
  setPartnerId
} from '../../../actions/siteActions';

import { generateCarousel, setCarouselFolderUrl, firstSlideUrl } from '../../../actions/carouselActions';

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
  setPartnerId(e) {
    this.props.dispatch(setPartnerId(e.target.value));
  }
  setTitle(e) {
    this.props.dispatch(setTitle(e.target.value));
  }
  setCarouselFolderUrl(e) {
    this.props.dispatch(setCarouselFolderUrl(e.target.value));
  }
  firstSlideUrl(e) {
    this.props.dispatch(firstSlideUrl(e.target.value));
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
          this.props.user.isJames ? this.refs.organizationId.value : -1,
          this.refs.organizationName.value,
          this.props.user.isJames ? this.refs.partnerId.value : -1,
          () => {
            resolve('sitePromise');
      }));
    });


    const carouselFolderId = this.refs['carousel-images'].value.split('=')[1];

    const carouselPromise = new Promise((resolve, reject) => {
      this.props.dispatch(generateCarousel(carouselFolderId, () => {
        resolve('carouselPromise');
      }));
    });


    Promise.all([logoPromise, carouselPromise, sitePromise]).then(() => {
      $('#setsite-button').removeClass('waiting').text(`
        Submit
      `);
      this.props.toast(`This site has been reset with new configuration.
        Site will reload in two seconds.`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }
  render() {
    const inlineStyle = {
      display: 'none'
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="well well-sm">
              <form className="form-horizontal" action="" method="post">
              <fieldset>
                <legend className="text-center">Set Site Detail</legend>
                {
                  this.props.user.isJames ?
                    <div>
                      <div className="form-group">
                        <label
                          className="col-md-3 control-label"
                          htmlFor="name"
                        >OrganizationId</label>
                        <div className="col-md-7">
                          <input
                            id="organizationId"
                            className="form-control"
                            name="organizationId"
                            onChange={this.setOrganizationId.bind(this)}
                            ref="organizationId"
                            type="text"
                            placeholder="Pictographr_db organization_id"
                            value={this.props.site.organization_id}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="col-md-3 control-label"
                          htmlFor="name"
                        >PartnerId</label>
                        <div className="col-md-7">
                          <input
                            id="partnerId"
                            className="form-control"
                            name="partnerId"
                            onChange={this.setPartnerId.bind(this)}
                            ref="partnerId"
                            type="text"
                            placeholder="Pictographr_db partner_id"
                            value={this.props.site.partner_id}
                          />
                        </div>
                      </div>
                    </div>
                  :
                    ''
                }
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Organization Name</label>
                  <div className="col-md-7">
                    <input
                      id="organizationName"
                      className="form-control"
                      name="organizationName"
                      onChange={this.setOrganizationName.bind(this)}
                      ref="organizationName"
                      type="text"
                      placeholder="Name of Organization"
                      value={this.props.site.organizationName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Shared Logo <b>File</b> Url</label>
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
                  <label
                    className="col-md-3 control-label"
                    htmlFor="name"
                  >First Slide URL</label>
                  <div className="col-md-7">
                    <input
                      id="firstSlideUrl"
                      className="form-control"
                      name="firstSlideUrl"
                      onChange={this.firstSlideUrl.bind(this)}
                      placeholder="First Slide URL"
                      ref="firstSlideUrl"
                      type="text"
                      value={this.props.firstSlideUrl}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    className="col-md-3 control-label"
                    htmlFor="name"
                  >Shared Carousel Folder URL</label>
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
