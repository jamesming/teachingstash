import React from 'react';
import { Link } from 'react-router';
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
        setTimeout(() => {
          $(window).scrollTop($('#files-column').offset().top);
        }, 1000);
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
              <div className="shoji-panel shoji-panel-right">
                  <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a
                          href="/#/"
                          onClick={this.slideAccountMenu.bind(this)}
                        >
                          Templates
                        </a>
                        <Link
                          to="topfold"
                          onClick={this.slideAccountMenu.bind(this)}
                        >Topfold</Link>
                      </li>
                      <li><a href="">Log off</a></li>
                  </ul>
              </div>
          </div>
          <div className="shoji-door">
              <div className="content">
                  <nav
                    id="navbar-fixed"
                    className="navbar navbar-default" role="navigation"
                  >
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
                      <div className="navbar-collapse collapse">
                          <ul className="nav navbar-nav navbar-right">
                              <li className="dropdown">
                                  <a
                                    href="" className="dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    Welcome, User <b className="caret" />
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a
                                        href="#/"
                                        >
                                          Templates
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                        href="#/topfold"
                                        >
                                          Topfold
                                        </a>
                                      </li>
                                      <li className="divider" />
                                      <li><a href="">Log off</a></li>
                                  </ul>
                              </li>
                          </ul>
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
