import React from 'react';
import Modaltop from './Modaltop';
import Signup from './Signup';
import Preview from './Preview';

export default class Modal extends React.Component {

  render() {
    console.log(JSON.stringify( this.props, null, 2));
    return (
      <div
        id='modalScreen'
        className='modal fade'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='modalScreen'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <Modaltop />
            <div className='modal-body'>
              {
                this.props.modalshow === 'signup' ?
                  <Signup />
                :
                  <Preview />
              }
            </div>
          </div>
        </div>
    </div>
    );
  }
}
