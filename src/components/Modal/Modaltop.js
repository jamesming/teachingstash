import React from 'react';

export default class Modaltop extends React.Component {

  render() {
    const inlineStyle = { 'border': '0px solid #FFFFFF' };

    return (
        <div className='modal-header' style={inlineStyle}>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
              <span aria-hidden='true'>×</span>
          </button>
        </div>
    );
  }
}
