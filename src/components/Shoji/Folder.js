import React from 'react';
import { addFiles } from '../../actions/filesActions';
import SubFolder from './Sub_folder';

export default class Folder extends React.Component {

  getUnorderedList() {
    const { folder } = this.props;

    const subcomponentFolder = folder.sub_folders.map((subFolder) => (
        <SubFolder
          dispatch={this.props.dispatch}
          key={subFolder.id}
          scrollToSidemenuTop={this.props.scrollToSidemenuTop}
          slideFolderMenu={this.props.slideFolderMenu}
          subFolder={subFolder}
        />
     ));

    return (
      <ul>{subcomponentFolder}</ul>
    );
  }

  dispatch(e) {
    if (!this.props.folder.sub_folders) this.props.slideFolderMenu();
    if (this.props.folder.files) {
      this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));
      this.props.scrollToSidemenuTop();
    }
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
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
                data-parent='#accordion' href={`.${folder.id}`}
                aria-expanded='false' aria-controls={folder.id}
              >
                {folder.title}
                {
                    folder.sub_folders ?
                      ' ...'
                    :
                      ''
                }
              </a>
            </h4>
          </div>
          <div
              className={`${folder.id} panel-collapse collapse`}
              role='tabpanel' aria-labelledby='panelref'
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
