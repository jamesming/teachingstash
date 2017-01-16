import React from 'react';
import File from './File';
import Folder from '../../Shoji/Folder';

export default class Files extends React.Component {
  slideFolderMenu() {
      if (window.innerWidth < 768) this.shoji.toggle('right', 130);
  }
  render() {
  const { templates } = this.props;
  const FoldersComponents = templates.map((folder) =>
    <Folder
      slideFolderMenu={this.slideFolderMenu.bind(this)}
      key={folder.id}
      folder={folder}
      dispatch={this.props.dispatch}
    />);

  const FilesComponents = this.props.files.map((file) => (
      <File
        assets={this.props.assets}
        key={file.id}
        file={file}
        dispatch={this.props.dispatch}
        launchPictographrFile={this.props.launchPictographrFile}
        loggedIn={this.props.loggedIn}
      />
    ));
    return (
      <div>
        <div>
          Carousel
        </div>
        <div className="container">
            <div className="row">
                <div className="hidden-xs col-sm-3">
                  <div
                    className='panel-group'
                    id='accordion'
                    role='tablist'
                    aria-multiselectable='true'
                  >
                  {FoldersComponents}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-9">
                  <div>
                    <h3>
                      {
                        this.props.loggedIn ?
                        <p>Logged In</p>
                        :
                        <p>Not Logged In</p>
                      }
                      </h3>
                    </div>
                  <div><h3>{this.props.files.folderTitle}</h3></div>
                  {FilesComponents}
                </div>
            </div>
        </div>
      </div>

    );
  }
}
