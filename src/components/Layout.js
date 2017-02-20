import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates, fetchAssets } from '../actions/templatesActions';
import { fetchCarousel } from '../actions/carouselActions';
import { getLogoJson, getSite } from '../actions/siteActions';
import CrossDomService from '../crossdom';
import Modal from './Modal/Modal';
import ShojiComponent from './Shoji/Shoji';

@connect((store) => ({
  activeFileId: store.files.activeFileId,
  assets: store.templates.assets,
  carouselParentFolderUrl: store.carousel.parentFolderUrl,
  firstSlideUrl: store.carousel.firstSlideUrl,
  files: store.files.files,
  folderTitle: store.files.folderTitle,
  modalshow: store.app.modalshow,
  slides: store.carousel.slides,
  sidemenutop: store.app.sidemenutop,
  site: store.site,
  templates: store.templates.templates,
  templatesParentFolderUrl: store.templates.parentFolderUrl,
  user: store.user,
}))

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.props.dispatch(fetchAssets());
    this.props.dispatch(fetchCarousel());
    this.props.dispatch(getLogoJson());
    this.props.dispatch(getSite());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile(createNew) {
    this.crossDomService.launchPictographrFile(createNew);
  }

  popGoogleSignIn() {
    let partnerId;
    if (parseInt(this.props.site.partner_id, 10) !== -1) {
      partnerId = this.props.site.partner_id;
    } else {
      partnerId = undefined;
    }

    this.crossDomService.popSignUpWindow(
      undefined,
      partnerId
    );
  }

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          activeFileId={this.props.activeFileId}
          modalshow={this.props.modalshow}
          popGoogleSignIn={this.popGoogleSignIn.bind(this)}
        />
        <ShojiComponent
          {...this.props}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          crossDomService={this.crossDomService}
          popGoogleSignIn={this.popGoogleSignIn.bind(this)}
        />
      </div>
    );
  }
}
