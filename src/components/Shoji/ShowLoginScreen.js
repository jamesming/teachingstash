import React from 'react';
import Signup from '../Modal/Signup';
import classStyle from './ShowLoginScreen.css';

export default class ShowLoginScreen extends React.Component {

  render() {
    return (
			<div className={classStyle.marginTop}>
				<Signup {...this.props} />
			</div>
    );
  }
}
