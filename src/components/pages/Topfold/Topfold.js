import React from 'react';
import { generateTemplates } from '../../../actions/templatesActions';

export default class Topfold extends React.Component {
  generateTemplatesJson() {
    $('#generateTemplatesJson-button').addClass('waiting').html(`
      <img alt='' src='https://pictographr.com/img/smallloading.gif'/>
    `);
    this.props.dispatch(generateTemplates(this.refs.sharedfolder.value, () => {
      $('#generateTemplatesJson-button').removeClass('waiting').text(`
        Preview
      `);
    }));
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="img-responsive" alt="" src="img/logo.png" />
        </div>
        <div className="container">
          <div className="jumbotron">
            <input
              onChange={() => {

              }}
              ref="sharedfolder" value={this.props.parentFolderId}
            />
            <button
              id="generateTemplatesJson-button"
              onClick={this.generateTemplatesJson.bind(this)}
              className=" btn btn-primary btn-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );

  }
}
