import React from 'react';
import Desktopmenu from './Settings/Desktopmenu';
import Mobilemenu from './Settings/Mobilemenu';
import Logo from './Logo';
import Folder from './Folder';

export default class ShojiCompnent extends React.Component {
    componentDidMount() {
      this.resizeWindow();
      this.shoji = new Shoji('#shoji');
    }

    componentWillUnmount() {
      window.removeEventListener('resize');
    }

    resizeWindow() {
      var resizeId = null;
      const doneResizing = () => {
        if ($('.shoji-panel-left').is(':visible')) this.slideFolderMenu();
      };
      window.addEventListener('resize', () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
      });
    }

    slideFolderMenu() {
      if (window.innerWidth < 768) {
        this.shoji.toggle('right', 130);
      }
    }

    slideAccountMenu() {
      this.shoji.toggle('left', 130);
    }

    render() {
      const children = React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, {
          ...this.props,
          shoji: this.shoji,
        })
      );

      const FoldersComponents = this.props.templates.map((folder) =>
        <Folder
          slideFolderMenu={this.slideFolderMenu.bind(this)}
          key={folder.id}
          folder={folder}
          dispatch={this.props.dispatch}
        />);

      return (
        <div className="shoji" id="shoji">
          <div className="shoji-rail">
              <div className="shoji-panel shoji-panel-left">
                <div
                  className='panel-group'
                  id='accordion'
                  role='tablist'
                  aria-multiselectable='true'
                >
                {FoldersComponents}
                </div>
              </div>
              <Mobilemenu
                shoji={this.shoji}
              />
          </div>
          <div className="shoji-door">
              <div className="content">
                  <nav
                    id="navbar-fixed"
                    className="navbar navbar-default" role="navigation"
                  >
                    <div className="container">

                      <Logo />
                      <div className="navbar-header">
                          {
                            this.props.children.type.name === 'Files' ?
                                <button
                                  id="showFolderMenuButton"
                                  onClick={this.slideFolderMenu.bind(this)}
                                  type="button"
                                  className="navbar-toggle navbar-toggle-left"
                                  data-slide="right"
                                >
                                    <i className="glyphicon glyphicon-th-large" />
                                </button>
                            :
                              ''
                          }
                          <button
                            onClick={this.slideAccountMenu.bind(this)}
                            type="button"
                            className="navbar-toggle navbar-toggle-right"
                            data-slide="left"
                          >
                              <i className="glyphicon glyphicon-cog" />
                          </button>
                      </div>
                      <Desktopmenu user={this.props.user} />
                    </div>
                  </nav>
                  <div id="route-section">
                    {children}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
