import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/templatesActions';
import CrossDomService from '../crossdom';
import Modal from './Modal';
import Topfold from './Topfold';
import Folder from './Folder';
import File from './File';

@connect((store) => ({
  templates: store.templates.templates,
  files: store.files.files,
  folderTitle: store.files.folderTitle,
  activeFileId: store.files.activeFileId,
  loggedIn: store.user.loggedIn
}))

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile() {
    this.crossDomService.launchPictographrFile(this.props.activeFileId);
  }

  popGoogleSignIn() {
    this.crossDomService.popSignUpWindow(this.props.activeFileId);
  }

  render() {
    const { templates, files, folderTitle, loggedIn } = this.props;
    const FoldersComponents = templates.map((folder) =>
      <Folder
        key={folder.id}
        folder={folder}
        dispatch={this.props.dispatch}
      />);

    const FilesComponents = files.map((file) => (
        <File
          key={file.id}
          file={file}
          dispatch={this.props.dispatch}
          launchPictographrFile={this.launchPictographrFile.bind(this)}
          loggedIn={loggedIn}
        />
      ));

    return (
      <div>
        <Topfold />
        <Modal popGoogleSignIn={this.popGoogleSignIn.bind(this)}/>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-md-3'>
              <div
                className='panel-group'
                id='accordion'
                role='tablist'
                aria-multiselectable='true'
              >
              {FoldersComponents}
              </div>
            </div>
            <div className='col-md-9'>
              <div>
                <h3>
                  {
                    loggedIn ?
                    <p>Logged In</p>
                    :
                    <p>Not Logged In</p>
                  }
                  </h3>
                </div>
              <div><h3>{folderTitle}</h3></div>
             {FilesComponents}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
