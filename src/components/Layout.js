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
  loggedIn: store.user.loggedIn,
  modalshow: store.app.modalshow,
  slides: store.carousel.slides,
  sidemenutop: store.app.sidemenutop,
  templates: store.templates.templates,
}))

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.props.dispatch(fetchAssets());
    this.props.dispatch(fetchCarousel());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile() {
    this.crossDomService.launchPictographrFile();
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
          assets={this.props.assets}
          children={this.props.children}
          dispatch={this.props.dispatch}
          files={this.props.files}
          folderTitle={this.props.folderTitle}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          loggedIn={this.props.loggedIn}
          slides={this.props.slides}
          sidemenutop={this.props.sidemenutop}
          templates={this.props.templates}
        />
      </div>
    );
  }
}
