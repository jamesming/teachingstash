import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates, fetchAssets } from '../actions/templatesActions';
import CrossDomService from '../crossdom';
import Modal from './Modal/Modal';
import Topfold from './Topfold';
import ShojiComponent from './Shoji';

@connect((store) => ({
  activeFileId: store.files.activeFileId,
  assets: store.templates.assets,
  files: store.files.files,
  loggedIn: store.user.loggedIn,
  modalshow: store.modal.show,
  templates: store.templates.templates,
}))

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.props.dispatch(fetchAssets());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile() {
    this.crossDomService.launchPictographrFile();
  }

  popGoogleSignIn() {
    this.crossDomService.popSignUpWindow();
  }

  render() { // <Topfold />
    return (
      <div>
        <ShojiComponent
          assets={this.props.assets}
          dispatch={this.props.dispatch}
          files={this.props.files}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          loggedIn={this.props.loggedIn}
          templates={this.props.templates}
        />
        <Modal
          activeFileId={this.props.activeFileId}
          modalshow={this.props.modalshow}
          popGoogleSignIn={this.popGoogleSignIn.bind(this)}
        />
      </div>
    );
  }
}
