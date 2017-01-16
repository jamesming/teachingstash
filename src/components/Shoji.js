import React from 'react';
import Folder from './Folder';

export default class ShojiCompnent extends React.Component {

    componentDidMount() {
      var resizeId = null;
      const doneResizing = () => {
        if ($('.shoji-panel-left').is(':visible')) this.slideFolderMenu();
      };
      window.addEventListener('resize', () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
      });
      this.shoji = new Shoji('#shoji');
    }

    componentWillUnmount() {
      window.removeEventListener('resize');
    }

    slideFolderMenu() {
      if (window.innerWidth < 768) this.shoji.toggle('right', 130);
    }

    slideAccountMenu() {
      this.shoji.toggle('left', 130);
    }

    render() {
      const children = React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, this.props)
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
                     <li><a
                        href="#/"
                        onClick={this.slideAccountMenu.bind(this)}
                        >
                          Templates
                        </a>
                      </li>
                      <li>
                        <a
                        href="#/topfold/James"
                        onClick={this.slideAccountMenu.bind(this)}
                        >
                          Topfold
                        </a>
                      </li>
                      <li><a href="">Log off</a></li>
                  </ul>
              </div>
          </div>
          <div className="shoji-door">
              <div className="content">
                  <nav className="navbar navbar-default square" role="navigation" id="navbar">
                      <div className="navbar-banner">
                          <a
                            href=""
                            className="navbar-brand"
                          >
                            <img alt="" src="http://placehold.it/150x50" />
                          </a>
                      </div>
                      <div className="navbar-header">
                          {
                            this.props.route === 'Files' ?
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
                                        href="#/topfold/James"
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
                  {children}
              </div>
          </div>
      </div>
    );
  }
}
