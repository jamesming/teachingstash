import React from 'react';

export default class Modal extends React.Component {

  render() {
    return (
      <div
        id="signupScreen"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signupScreen"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                  <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              TEST
            </div>
          </div>
        </div>
    </div>
    );

  }
}
