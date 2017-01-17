import React from 'react';

export default class Topfold extends React.Component {

  render() {
    //console.log(this.props.params.name);
    return (
      <div>
        <div className="container">
          <img className="img-responsive" alt="" src="img/logo.png"  />
        </div>
        <div className="container">
          <div className="jumbotron">
            <h1>Enlarge Image Modal</h1>
            <h2>TEST</h2>
          </div>
        </div>
      </div>
    );

  }
}
