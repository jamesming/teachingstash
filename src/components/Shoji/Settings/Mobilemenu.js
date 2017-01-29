import React from 'react';
import { Link } from 'react-router';

export default class Mobilemenu extends React.Component {
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
                  onClick={() => {
                      this.slideAccountMenu();
                      setTimeout(() => {
                        this.props.scrollToSidemenuTop();
                      }, 1000);
                    }
                  }
                >
                  Templates
                </a>
                <Link
                  to="settings"
                  onClick={this.slideAccountMenu.bind(this)}
                >Settings</Link>
              </li>
              <li><a href="">Log off</a></li>
          </ul>
      </div>
    );
  }
}
