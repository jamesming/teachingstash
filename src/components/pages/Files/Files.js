import React from 'react';
import File from './File';
import Carousel from './Carousel/Carousel';
import Folder from '../../Shoji/Folder';

export default class Files extends React.Component {
  componentDidMount() {
    this.onScroll();
  }

  onScroll() {
    const handler = null;
    window.removeEventListener('scroll', handler, false);

    const topPadding = 350;  // Adjust this number for folder animation
    const carouselHeight = 320;
    window.addEventListener('scroll', () => {
      if ($(window).scrollTop() > 1) {
        $('#navbar-fixed').addClass('shadowed');
      } else {
        $('#navbar-fixed').removeClass('shadowed');
      }
      if ($(window).scrollTop() > this.props.sidemenutop + carouselHeight) {
        $('#sidemenu').stop().animate({
          'margin-top': $(window).scrollTop() - (this.props.sidemenutop + topPadding)
        });
      } else {
        $('#sidemenu').stop().animate({
            marginTop: 25
        });
      }
    }, false);
  }

  slideFolderMenu() {
    if ($('.shoji-panel-left').is(':visible')) this.props.shoji.toggle('right', 130);
  }

  render() {
  const FoldersComponents = this.props.templates.map((folder) =>
    <Folder
      dispatch={this.props.dispatch}
      folder={folder}
      key={folder.id}
      scrollToSidemenuTop={this.props.scrollToSidemenuTop}
      slideFolderMenu={this.slideFolderMenu.bind(this)}
    />);

  const FilesComponents = this.props.files.map((file) => (
      <File
        file={file}
        key={file.id}
        slideFolderMenu={this.slideFolderMenu.bind(this)}
        {...this.props}
      />
    ));

  const imgInline = {
    padding: '50px 0px'
  };
  return (
    <div>
      <div className="container" style={imgInline} >
        <center>
          <Carousel slides={this.props.slides} />
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
                <div><h3>{this.props.folderTitle}</h3></div>
                {FilesComponents}
              </div>
          </div>
      </div>
    </div>

    );
  }
}
