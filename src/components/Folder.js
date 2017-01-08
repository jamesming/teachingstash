import React from 'react';
import { addFiles } from '../actions/filesActions';
import SubFolder from './Sub_folder';

export default class Folder extends React.Component {

  dispatch() {
    if (this.props.folder.files) {
      this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));
    }
  }

  render() {
    const { folder } = this.props;

    var panelref = 'heading-' + folder.id,
        target = '#' + folder.id,
        enableCollapse = '',
        subFolderUl = '';

    if (folder.sub_folders) {
      const subcomponentFolder = folder.sub_folders.map((subFolder) => (
          <SubFolder
            key={subFolder.id}
            subFolder={subFolder}
            dispatch={this.props.dispatch}
          />
       ));

      enableCollapse = 'collapse';
      subFolderUl = (
        <ul>{subcomponentFolder}</ul>
     );
    }

    return (
        <div key={folder.id} className='panel panel-default'>
          <div className='panel-heading' role='tab' id={panelref}>
            <h4 className='panel-title'>
              <a
                className='collapsed' onClick={this.dispatch.bind(this)} role='button'
                data-toggle={(enableCollapse)} data-parent='#accordion' href={target}
                aria-expanded='false' aria-controls={folder.id}
              >
                {folder.title}
              </a>
            </h4>
          </div>
          <div
            id={folder.id}
            className='panel-collapse collapse' role='tabpanel' aria-labelledby='{panelref}'
          >
            <div className='list-group'>
              {subFolderUl}
            </div>
          </div>
        </div>
   );
  }
}
