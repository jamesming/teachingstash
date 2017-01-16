import React from 'react';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <div className="container" >
            <div className="row">
              <div className="col-lg-12">
                {this.props.children}
              </div>
            </div>
        </div>
        <div className="container" >
            <div className="row">
              <div className="col-lg-12">
                Footer
              </div>
            </div>
        </div>
      </div>

    );

  }
}
