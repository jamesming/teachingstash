import React from "react"

export default class File extends React.Component {

  dispatch(){

    // this.props.dispatch(addFiles(this.props.folder.files, this.props.folder.title));

  }

  render() {

    const src = `https://pictographr.com/temp/templates/${ this.props.file.id }.png`;

    return (
      <div class="col-md-3">
          <a href="#" class="thumbnail">
              <img src={src} alt="ALT NAME" />
              <div class="caption">
              <h4>{this.props.file.title}</h4>
              <p>
            <button class="btn btn-primary btn-sm" target="_top">Launch</button>&nbsp;&nbsp;
            <button class="btn btn-primary btn-sm" target="_top">Email</button>
              </p>
            </div>
          </a>
      </div>
    )
  }
}
