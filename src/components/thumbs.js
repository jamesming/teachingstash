import React from "react"
import Sub_folder from "./Sub_folder"

export default class Folder extends React.Component {

  render() {

    const inlineTitle = {
      cursor: "pointer",
      listStyle: "none"
    }


    return (
        <li style={inlineTitle}>{ this.props.sub_folder_title }</li>
    )
  }
}
