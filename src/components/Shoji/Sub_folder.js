import React from 'react';
import { addFiles } from '../../actions/filesActions';
import subFolder from './Sub_folder.css';

export default class Subfolder extends React.Component {

  dispatch() {
    this.props.slideFolderMenu();
    this.props.dispatch(addFiles(this.props.subFolder.files, this.props.subFolder.title));
    this.props.scrollToSidemenuTop();
  }

  render() {
    const inlineTitle = {
      cursor: 'pointer',
      listStyle: 'none'
    };

    return (
        <li
        className={subFolder.element}
        style={inlineTitle}
        onClick={this.dispatch.bind(this)}
        >{ this.props.subFolder.title }</li>
    );
  }
}
