import React from 'react';
import File from './File';
import Folder from './Folder';

export default class ShojiCompnent extends React.Component {

    render() {
        const { templates } = this.props;
        const FoldersComponents = templates.map((folder) =>
          <Folder
            key={folder.id}
            folder={folder}
            dispatch={this.props.dispatch}
          />);

        const FilesComponents = this.props.files.map((file) => (
            <File
              key={file.id}
              file={file}
              dispatch={this.props.dispatch}
              launchPictographrFile={this.props.launchPictographrFile}
              loggedIn={this.props.loggedIn}
            />
          ));

        let shoji = new Shoji('#shoji');
        $('[data-slide]').unbind('click').click(function () { shoji.toggle($(this).data('slide'), 130); });

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
                        <li><a href="">Log off</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="shoji-door">
                <div className="content">
                    <nav className="navbar navbar-default square" role="navigation" id="navbar">
                        <div className="navbar-banner">
                            <a href="" className="navbar-brand">Brand</a>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle navbar-toggle-left" data-slide="right">
                                <i className="glyphicon glyphicon-th-large" />
                            </button>
                            <button type="button" className="navbar-toggle navbar-toggle-right" data-slide="left">
                                <i className="glyphicon glyphicon-cog" />
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown">Welcome, User <b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="">Log off</a></li>
                                        <li className="divider" />
                                        <li><a href="">About</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="hidden-xs col-sm-4">
                              <div
                                className='panel-group'
                                id='accordion'
                                role='tablist'
                                aria-multiselectable='true'
                              >
                              {FoldersComponents}
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-8">
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
            </div>
        </div>
    );
  }
}
