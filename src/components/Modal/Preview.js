import React from 'react';

export default class Preview extends React.Component {

  render() {
    const imgStyle = {
      margin: 'auto auto',
      display: 'block'
    };

    return (
      <div>
        <img
          id="previewImg"
          className="img-responsive" style={imgStyle} alt=''
          src={`${window.resources}templates/pngs/${this.props.activeFileId}.png`}
        />
      </div>
    );
  }
}
