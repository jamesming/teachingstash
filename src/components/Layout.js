import React from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/templatesActions';
import CrossDomService from '../crossdom';
import Folder from './Folder';
import File from './File';

@connect((store) => ({
  templates: store.templates.templates,
  files: store.files.files,
  folderTitle: store.files.folderTitle
}))

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTemplates());
    this.crossDomService = new CrossDomService();
  }

  launchPictographrFile(fileId) {
    if (this.crossDomService.userIsLoggedIn()) {
      this.crossDomService.launchPictographrFile(fileId);
    } else {
      this.crossDomService.popSignUpWindow(() => {
        this.crossDomService.launchPictographrFile(fileId);
      });
    }
  }

  render() {
    const { templates, files, folderTitle } = this.props;
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
        />
      ));

    return (
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-md-3'>
            <div className='panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
            {FoldersComponents}
            </div>
          </div>
          <div className='col-md-9'>
            <div><h3>JAMES</h3></div>
            <div><h3>{folderTitle}</h3></div>
           {FilesComponents}
          </div>
        </div>
      </div>
    );
  }
}
