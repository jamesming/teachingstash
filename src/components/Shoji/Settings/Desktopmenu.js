import React from 'react';
import { setModalShow } from '../../../actions/appActions';

export default class Desktopmenu extends React.Component {
  setModalSignup() {
    this.props.dispatch(setModalShow('signup'));
  }

  launchNewPictographr() {
    this.props.launchPictographrFile(true);
  }

  logout() {
    this.props.crossDomService.logout();
  }

  render() {
    const signupButtonStyle = {
      position: 'relative',
      float: 'right',
      marginTop: '6.5px',
      width: '200px',
    };
    const buttonStyle = {
      float: 'right',
      marginTop: '14px',
      marginRight: '10px'
    };
    const ulStyle = {
      marginTop: '4px',
    };
    return (
      <div>
        <div className="navbar-collapse collapse">
          {
            this.props.user.loggedIn ?
              <ul  style={ulStyle} className="nav navbar-nav navbar-right">
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
                            { // Only when user is Super User
                              this.props.user.isSuper === '1' ?
                                <li>
                                  <a
                                    href="#/Assets"
                                    onClick={() => {
                                      setTimeout(() => {
                                        $('html, body').stop().animate({ scrollTop: 0 }, 500);
                                      }, 500);
                                    }}
                                  >
                                    Assets
                                  </a>
                                </li>
                              :
                                ''
                            }
                            { // Only when user is Administrator
                              this.props.user.isOrgAdmin === '1' ?
                                <li>
                                  <a
                                    href="#/Site"
                                    onClick={() => {
                                      setTimeout(() => {
                                        $('html, body').stop().animate({ scrollTop: 0 }, 500);
                                      }, 500);
                                    }}
                                  >
                                    Site
                                  </a>
                                </li>
                              :
                                ''
                            }
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
          { // Only show button when route is Files
            this.props.children.type.name === 'Files' &&
            this.props.user.loggedIn === true
            ?
              <button
                id="new-design-button"
                className='btn btn-primary btn-sm'
                onClick={this.launchNewPictographr.bind(this)}
                style={buttonStyle}
              >
              New Design
              </button>
            :
              ''
          }
        </div>
      </div>
    );
  }
}
