import React from 'react';
import File from './File';
import Folder from '../../Shoji/Folder';

export default class Files extends React.Component {
  componentDidMount() {
    this.onScroll();
  }

  onScroll() {
    const handler = null;
    window.removeEventListener('scroll', handler, false);

    const topPadding = 280;
    const carouselHeight = 320;
    window.addEventListener('scroll', () => {
      if ($(window).scrollTop() > this.props.sidemenutop + carouselHeight) {
        $('#sidemenu').stop().animate({
          'margin-top': $(window).scrollTop() - (this.props.sidemenutop + topPadding)
        });
      } else {
        $('#sidemenu').stop().animate({
            marginTop: 0
        });
      }
    }, false);
  }

  slideFolderMenu() {
    if ($('.shoji-panel-left').is(':visible')) this.props.shoji.toggle('right', 130);
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
        slideFolderMenu={this.slideFolderMenu.bind(this)}
        assets={this.props.assets}
        key={file.id}
        file={file}
        dispatch={this.props.dispatch}
        launchPictographrFile={this.props.launchPictographrFile}
        loggedIn={this.props.loggedIn}
      />
    ));

  const imgInline = {
    padding: '50px 0px'
  };

  return (
    <div>
      <div className="container" style={imgInline} >
        <center>
          <img alt="" className="img-responsive" src="http://placehold.it/550x350" />
        </center>
      </div>
      <div className="container">
          <div className="row">
              <div id="sidemenu" className="hidden-xs col-sm-3">
                <div
                  className='panel-group'
                  id='accordion'
                  role='tablist'
                  aria-multiselectable='true'
                >
                {FoldersComponents}
                </div>
              </div>
              <div id="files-column" className="col-xs-12 col-sm-9">
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
                <div><h3>{this.props.folderTitle}</h3></div>
                {FilesComponents}
              </div>
          </div>
      </div>
    </div>

    );
  }
}
