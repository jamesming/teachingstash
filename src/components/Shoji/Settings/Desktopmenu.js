import React from 'react';
import { setModalShow } from '../../../actions/appActions';

export default class Desktopmenu extends React.Component {
  setModalSignup() {
    this.props.dispatch(setModalShow('signup'));
  }

  logout() {
    this.props.crossDomService.logout();
  }

  render() {
    const signupButtonStyle = {
      position: 'relative',
      float: 'right',
      marginTop: '6.5px',
      width: '167px',
    };
    const buttonStyle = {
      float: 'right',
      marginTop: '10px',
      marginRight: '10px'
    };
    return (
      <div>
        <div className="navbar-collapse collapse">
          {
            this.props.user.loggedIn ?
              <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                      <a
                        href="" className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Welcome {this.props.user.name} <b className="caret" />
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
                          <li>
                              <a
                                style={{
                                  cursor: 'pointer'
                                }}
                                onClick={this.logout.bind(this)}
                              >Log off
                              </a>
                          </li>
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
          <button
            id="new-design-button"
            className='btn btn-primary btn-sm'
            style={buttonStyle}
          >
          New Design
          </button>
        </div>
      </div>
    );
  }
}
