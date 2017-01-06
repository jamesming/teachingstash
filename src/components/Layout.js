import React from "react"
import { connect } from "react-redux"
import { fetchTemplates } from "../actions/templatesActions"
import { addFiles } from "../actions/filesActions"
import CrossDomService from "../crossdom"
import Folder from "./Folder"
import File from "./File"

@connect((store) => {
  return {
    templates: store.templates.templates,
    files: store.files.files,
    folder_title: store.files.folder_title,
  };
})

export default class Layout extends React.Component {

  componentWillMount() {

    this.props.dispatch(fetchTemplates())
    this.crossDomService =  new CrossDomService();

  }

  launchPictographrFile( fileId ){

    if( this.crossDomService.userIsLoggedIn() ) {
      this.crossDomService.launchPictographrFile( fileId );
    } else {
      this.crossDomService.popSignUpWindow(() => {
        this.crossDomService.launchPictographrFile( fileId );
      });

    }

  }

  render() {

    const { templates, files, folder_title } = this.props;

    const FoldersComponents = templates.map( (folder) => {
      return <Folder key={ folder.id } folder={ folder } dispatch={this.props.dispatch}/>
    })

    const FilesComponents = files.map( (file) => {
      return <File key={file.id} file={file} dispatch={this.props.dispatch} launchPictographrFile={this.launchPictographrFile.bind(this)}/>
    })

    return (
      <div class="container-fluid ">
        <div class="row">
          <div class="col-md-3">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
             {FoldersComponents}
            </div>
          </div>
          <div class="col-md-9">
            <div><h3>JAMES</h3></div>
            <div><h3>{folder_title}</h3></div>
            {FilesComponents}
          </div>
        </div>
      </div>
    )
  }
}
