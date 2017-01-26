import React from 'react';
import { setModalShow } from '../../../actions/appActions';

export default class Desktopmenu extends React.Component {
  setModalSignup() {
    this.props.dispatch(setModalShow('signup'));
  }

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
                        <li>
                          <a
                            href="#/"
                            onClick={() => {
                              setTimeout(() => {
                                this.props.scrollToSidemenuTop();
                              }, 1000);
                            }}
                          >
                            Templates
                          </a>
                        </li>
                        <li>
                          <a
                            href="#/topfold"
                          >
                            Set Folder
                          </a>
                        </li>
                        <li className="divider" />
                        <li><a href="">Log off</a></li>
                    </ul>
                </li>
            </ul>
          :
            <img
              alt=''
              className="signupButton img-responsive"
              data-toggle='modal'
              data-target='#modalScreen'
              onClick={this.setModalSignup.bind(this)}
              src='https://pictographr.com/img/loginGoogle.png'
              style={signupButtonStyle}
            />
        }
      </div>
    );
  }
}
