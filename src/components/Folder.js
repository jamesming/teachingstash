import React from 'react';
import { addFiles } from '../actions/filesActions';
import Sub_folder from './Sub_folder';

export default class Folder extends React.Component {

  dispatch() {
    if (this.props.folder.files) {
      this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));
    }
  }

  render() {
    const { folder } = this.props;

    var folderTitle = folder.title,
        folderId = folder.id,
        panelref = 'heading-' + folderId,
        target = '#' + folderId,
        subcomponentFolder = [],
        enableCollapse = '',
        subFolderUl = '';

    if (folder.sub_folders) {
      for(let idx in folder.sub_folders) {
        const subFolder = folder.sub_folders[idx];
        const sub_folder_title = subFolder.title;

        subcomponentFolder.push(
          <Sub_folder
            key={idx}
            subFolder={subFolder}
            sub_folder_title={sub_folder_title}
            dispatch={this.props.dispatch}
          />
       );
      }
      enableCollapse = 'collapse';
      subFolderUl = (
        <ul>{subcomponentFolder}</ul>
     );
    }

    return (
        <div key={folderId} className='panel panel-default'>
          <div className='panel-heading' role='tab' id={panelref}>
            <h4 className='panel-title'>
              <a
                className='collapsed' onClick={this.dispatch.bind(this)} role='button'
                data-toggle={enableCollapse} data-parent='#accordion' href={target}
                aria-expanded='false' aria-controls={folderId}
              >
                {folderTitle}
              </a>
            </h4>
          </div>
          <div
            id={folderId}
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
