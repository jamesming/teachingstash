import React from 'react';
import { Link } from 'react-router';

export default class Mobilemenu extends React.Component {
  slideFolderMenu() {
    if (window.innerWidth < 768) {
      this.props.shoji.toggle('right', 130);
    }
  }

  slideAccountMenu() {
    this.props.shoji.toggle('left', 130);
  }

  render() {
    return (
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
                >Set Folder</Link>
              </li>
              <li><a href="">Log off</a></li>
          </ul>
      </div>
    );
  }
}
