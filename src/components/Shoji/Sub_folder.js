import React from 'react';
import { addFiles } from '../../actions/filesActions';
import fooStyle from './styles.css';

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

    console.log(fooStyle);

    return (
        <li
        className={fooStyle.li}
        style={inlineTitle}
        onClick={this.dispatch.bind(this)}
        >{ this.props.subFolder.title }</li>
    );
  }
}
