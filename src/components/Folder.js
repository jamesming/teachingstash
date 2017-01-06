import React from "react"
import { addFiles } from "../actions/filesActions"
import Sub_folder from "./Sub_folder"

export default class Folder extends React.Component {

  dispatch(){

    if( this.props.folder.files ){
      this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));
    }

  }

  render() {

    const { folder } = this.props;

    let folder_title = folder.title,
        folder_id = folder.id,
        files = folder.files,
        panelref = "heading-" + folder_id,
        target = "#" + folder_id,
        sub_folderComponents = [],
        enableCollapse = "",
        sub_folders_ul = "";

    if( folder.sub_folders ) {

      for( let idx in folder.sub_folders){

        let sub_folder = folder.sub_folders[idx],
            sub_folder_id = sub_folder.id,
            sub_folder_title = sub_folder.title;

        sub_folderComponents.push(
          <Sub_folder key={idx} sub_folder={sub_folder} sub_folder_title={sub_folder_title} dispatch={this.props.dispatch}/>
        );

      }
      enableCollapse = "collapse";
      sub_folders_ul = (
        <ul>{sub_folderComponents}</ul>
      );

    }

    return (
        <div key={folder_id}  class="panel panel-default">
          <div class="panel-heading" role="tab" id={panelref}>
            <h4 class="panel-title">
              <a class="collapsed" onClick={this.dispatch.bind(this)} role="button" data-toggle={enableCollapse} data-parent="#accordion" href={target} aria-expanded="false" aria-controls={folder_id}>
                {folder_title}
              </a>
            </h4>
          </div>
          <div id={folder_id} class="panel-collapse collapse" role="tabpanel" aria-labelledby="{panelref}">
            <div class="list-group">
              {sub_folders_ul}
            </div>
          </div>
        </div>
    )
  }
}
