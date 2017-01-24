import React from 'react';
import { addFiles } from '../../actions/filesActions';
import SubFolder from './Sub_folder';

export default class Folder extends React.Component {

  getUnorderedList() {
    const { folder } = this.props;

    const subcomponentFolder = folder.sub_folders.map((subFolder) => (
        <SubFolder
          slideFolderMenu={this.props.slideFolderMenu}
          key={subFolder.id}
          subFolder={subFolder}
          dispatch={this.props.dispatch}
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
      this.scrollToSidemenuTop();
    }
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
  }

  scrollToSidemenuTop() {
      const sideMenuTop = $('#files-column').offset().top;
      $('html, body').stop().animate({ scrollTop: sideMenuTop }, 500);
  }

  render() {
    const { folder } = this.props;
    const styleFolder = {
      border: '0px',
      backgroundColor: '#FFFFFF'
    };

    return (
        <div style={styleFolder} key={folder.id} className='panel panel-default'>
          <div  style={styleFolder} className='panel-heading' role='tab' id={`heading-${folder.id}`}>
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
