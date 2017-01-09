import React from 'react';
import { addFiles } from '../actions/filesActions';
import SubFolder from './Sub_folder';

export default class Folder extends React.Component {

  getUnorderedList() {
    const { folder } = this.props;

    const subcomponentFolder = folder.sub_folders.map((subFolder) => (
        <SubFolder
          key={subFolder.id}
          subFolder={subFolder}
          dispatch={this.props.dispatch}
        />
     ));

    return (
      <ul>{subcomponentFolder}</ul>
    );
  }

  dispatch() {
    if (this.props.folder.files) {
      this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));
    }
  }

  render() {
    const { folder } = this.props;

    return (
        <div key={folder.id} className='panel panel-default'>
          <div className='panel-heading' role='tab' id={`heading-${folder.id}`}>
            <h4 className='panel-title'>
              <a
                className='collapsed' onClick={this.dispatch.bind(this)} role='button'
                data-toggle={
                    folder.sub_folders ?
                    'collapse'
                    :
                    ''
                  }
                data-parent='#accordion' href={`#${folder.id}`}
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
              {
                folder.sub_folders ? this.getUnorderedList() : ''
              }
            </div>
          </div>
        </div>
   );
  }
}
