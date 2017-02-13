import React from 'react';
import Desktopmenu from './Settings/Desktopmenu';
import Folder from './Folder';
import Logo from './Logo';
import Mobilemenu from './Settings/Mobilemenu';
import Nopermissiontoview from './Nopermissiontoview';
import ShowLoginScreen from './ShowLoginScreen';

import classStyle from './Shoji.css';

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

    scrollToSidemenuTop() {
      const sideMenuTop = $('#files-column').offset().top - 55;
      $('html, body').stop().animate({ scrollTop: sideMenuTop }, 500);
    }

    toast(message) {
      $.toast().reset('all');
      const options = {};
      options.text = message;
      options.stack = 12;
      options.loaderBg = '#4285F4';
      options.icon = 'success';
      options.heading = 'Success';
      options.hideAfter = 10000;
      $.toast(options);
    }

    render() {
      const children = React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, {
          ...this.props,
          toast: this.toast,
          shoji: this.shoji,
          scrollToSidemenuTop: this.scrollToSidemenuTop
        })
      );

      const FoldersComponents = this.props.templates.map((folder) =>
        <Folder // other folders component in Files.js line 41
          slideFolderMenu={this.slideFolderMenu.bind(this)}
          scrollToSidemenuTop={this.scrollToSidemenuTop.bind(this)}
          key={folder.id}
          folder={folder}
          dispatch={this.props.dispatch}
        />);

      const shojiDiv = (
          <div className="shoji" id="shoji">
            <div className="shoji-rail">
                <div className="shoji-panel shoji-panel-left">
                  <div
                    className='panel-group'
                    id='accordion'
                    role='tablist'
                    aria-multiselectable='true'
                  >
                  {
                    FoldersComponents
                  }
                  </div>
                </div>
                <Mobilemenu
                  shoji={this.shoji}
                  scrollToSidemenuTop={this.scrollToSidemenuTop.bind(this)}
                />
            </div>
            <div className="shoji-door">
                <div className="content">
                    <nav
                      id="navbar-fixed"
                      className={`${classStyle.navbarFixed} navbar navbar-default`} role="navigation"
                    >
                      <div className="container">
                        <Logo {...this.props} />
                        <div className={`${classStyle.navbarHeader} navbar-header`}>
                            { // Only show button when route is Files
                              this.props.children.type.name === 'Files' ?
                                  <button
                                    id="folders-mobile-button"
                                    onClick={this.slideFolderMenu.bind(this)}
                                    type="button"
                                    className="navbar-toggle navbar-toggle-left"
                                    data-slide="right"
                                  >
                                      <i className="glyphicon glyphicon-menu-hamburger" />
                                  </button>
                              :
                                ''
                            }
                            <button // Mobile settings button hidden... for use later
                              id="settings-mobile-button"
                              onClick={this.slideAccountMenu.bind(this)}
                              type="button"
                              className="navbar-toggle navbar-toggle-right"
                              data-slide="left"
                            >
                                <i className="glyphicon glyphicon-cog" />
                            </button>
                        </div>
                        <Desktopmenu
                          {...this.props}
                          scrollToSidemenuTop={this.scrollToSidemenuTop.bind(this)}
                        />
                      </div>
                    </nav>
                    <div id="routeSection" className={classStyle.routeSection}>
                      {children}
                    </div>
                </div>
            </div>
          </div>
      );

      let displayWhat;
      const siteOrganizationId = parseInt(this.props.site.organization_id, 10);
      const userOrganizationId = parseInt(this.props.user.organization_id, 10);
      if (
          window.location.hostname.split('.')[0] === 'localhost'
      ) {
        displayWhat = shojiDiv;
        //displayWhat = <Nopermissiontoview {...this.props} />;
      } else if (
        typeof (this.props.site.organization_id) === 'undefined' ||
        this.props.site.organization_id === -1
      ) {
        displayWhat = shojiDiv;
      } else if (
        this.props.user.isJames
      ) {
        displayWhat = shojiDiv;
      } else if (
          this.props.user.loggedIn &&
          userOrganizationId !== siteOrganizationId
      ) {
        displayWhat = <Nopermissiontoview {...this.props} />;
      } else if (
          !this.props.user.loggedIn &&
          siteOrganizationId > 0
      ) {
        displayWhat = <ShowLoginScreen {...this.props} />;
      } else if (
          !this.props.user.loggedIn &&
          siteOrganizationId === 0
      ) {
        displayWhat = shojiDiv;
      } else if (
          this.props.user.loggedIn &&
          userOrganizationId !== 0 &&
          siteOrganizationId !== 0 &&
          userOrganizationId === siteOrganizationId
      ) {
        displayWhat = shojiDiv;
      }

      return (
        <div>
        { displayWhat }
        </div>

    );
  }
}
