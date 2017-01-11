import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/templatesActions';
import CrossDomService from '../crossdom';
import Modal from './Modal/Modal';
import Topfold from './Topfold';
import ShojiComponent from './Shoji';

@connect((store) => ({
  activeFileId: store.files.activeFileId,
  files: store.files.files,
  loggedIn: store.user.loggedIn,
  modalshow: store.modal.show,
  templates: store.templates.templates,
}))

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTemplates());
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
          dispatch={this.props.dispatch}
          templates={this.props.templates}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          files={this.props.files} loggedIn={this.props.loggedIn}
        />
        <Modal modalshow={this.props.modalshow} popGoogleSignIn={this.popGoogleSignIn.bind(this)} />
      </div>
    );
  }
}
