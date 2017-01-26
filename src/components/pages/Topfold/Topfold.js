import React from 'react';

export default class Topfold extends React.Component {

  componentDidMount() {
    console.log(this.refs.sharedfolder.value);
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="img-responsive" alt="" src="img/logo.png" />
        </div>
        <div className="container">
          <div className="jumbotron">
            <input ref="sharedfolder" value="sharedfolderValue" />
          </div>
        </div>
      </div>
    );

  }
}
