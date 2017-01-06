import React from "react"
import { addFiles } from "../actions/filesActions"

export default class Sub_Folder extends React.Component {

  dispatch(){

    this.props.dispatch(addFiles(this.props.sub_folder.files, this.props.sub_folder.title));

  }

  render() {

    const inlineTitle = {
      cursor: "pointer",
      listStyle: "none"
    }


    return (
        <li style={inlineTitle} onClick={this.dispatch.bind(this)} >{ this.props.sub_folder_title }</li>
    )
  }
}
