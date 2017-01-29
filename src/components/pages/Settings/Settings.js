import React from 'react';
import { generateTemplates } from '../../../actions/templatesActions';
import Assets from './Assets';
import Site from './Site';

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
        <div>
          <br />
          <br />
        </div>
        <Assets {...this.props} />
        <Site {...this.props} />
      </div>
    );
  }
}
