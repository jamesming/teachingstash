import React from 'react';

export default class Desktopmenu extends React.Component {
  render() {
    const signupButtonStyle = {
      width: '180px',
      margin: '0',
      position: 'relative',
      float: 'right',
    };
    return (
      <div className="navbar-collapse collapse">
        {
          this.props.user.loggedIn ?
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
                        <li><a href="">Log off XX</a></li>
                    </ul>
                </li>
            </ul>
          :
            <img
              alt=''
              className="signupButton img-responsive"
              style={signupButtonStyle}
              src='https://pictographr.com/img/loginGoogle.png'
            />
        }
      </div>
    );
  }
}
