import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates, fetchAssets } from '../actions/templatesActions';
import { fetchCarousel } from '../actions/carouselActions';
import CrossDomService from '../crossdom';
import Modal from './Modal/Modal';
import ShojiComponent from './Shoji/Shoji';

@connect((store) => ({
  activeFileId: store.files.activeFileId,
  assets: store.templates.assets,
  files: store.files.files,
  folderTitle: store.files.folderTitle,
  modalshow: store.app.modalshow,
  templatesParentFolderId: store.templates.parentFolderId,
  slides: store.carousel.slides,
  carouselParentFolderId: store.carousel.parentFolderId,
  sidemenutop: store.app.sidemenutop,
  templates: store.templates.templates,
  user: store.user,
}))

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.props.dispatch(fetchAssets());
    this.props.dispatch(fetchCarousel());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile(createNew) {
    this.crossDomService.launchPictographrFile(createNew);
  }

  popGoogleSignIn() {
    this.crossDomService.popSignUpWindow();
  }

  render() {
    return (
      <div>
        <Modal
          activeFileId={this.props.activeFileId}
          modalshow={this.props.modalshow}
          popGoogleSignIn={this.popGoogleSignIn.bind(this)}
        />
        <ShojiComponent
          {...this.props}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          crossDomService={this.crossDomService}
        />
      </div>
    );
  }
}
