import React from "react"
import { connect } from "react-redux"
import { fetchTemplates } from "../actions/templatesActions"
import Folder from "./Folder"
import { addFiles } from "../actions/filesActions"
import File from "./File"

@connect((store) => {
  return {
    templates: store.templates.templates,
    files: store.files.files,
  };
})
export default class Layout extends React.Component {

  componentWillMount() {

    this.props.dispatch(fetchTemplates())

    setTimeout( ()=>{
      this.props.dispatch(addFiles(this.props.templates[0].files, this.props.templates[0].title));
    }, 1000);

  }

  render() {

    const { templates, files } = this.props;

    const FoldersComponents = templates.map( (folder) => {
      return <Folder key={ folder.id } folder={ folder } dispatch={this.props.dispatch}/>
    })

    const FilesComponents = files.map( (file) => {
      return <File key={file.id} file={file} dispatch={this.props.dispatch}/>
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
             {FilesComponents}
          </div>
        </div>
      </div>
    )
  }
}
