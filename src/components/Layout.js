import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates, fetchAssets } from '../actions/templatesActions';
import { setRoute } from '../actions/appActions';
import CrossDomService from '../crossdom';
import Modal from './Modal/Modal';
import ShojiComponent from './Shoji';

@connect((store) => ({
  activeFileId: store.files.activeFileId,
  assets: store.templates.assets,
  files: store.files.files,
  loggedIn: store.user.loggedIn,
  modalshow: store.app.modalshow,
  route: store.app.route,
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

  render() {
    console.log(this.props.location);
    this.props.dispatch(setRoute(this.props.children.type.name));
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
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          loggedIn={this.props.loggedIn}
          route={this.props.route}
          templates={this.props.templates}
        />
      </div>
    );
  }
}
