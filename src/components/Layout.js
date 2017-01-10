import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/templatesActions';
import CrossDomService from '../crossdom';
import Modal from './Modal';
import Topfold from './Topfold';
import ShojiComponent from './Shoji';
import File from './File';

@connect((store) => ({
  templates: store.templates.templates,
  files: store.files.files,
  activeFileId: store.files.activeFileId,
  loggedIn: store.user.loggedIn
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

  render() {
    return (
      <div>
        <Topfold />
        <ShojiComponent
          dispatch={this.props.dispatch}
          templates={this.props.templates}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          files={this.props.files} loggedIn={this.props.loggedIn}
        />
        <Modal popGoogleSignIn={this.popGoogleSignIn.bind(this)} />
      </div>
    );
  }
}
