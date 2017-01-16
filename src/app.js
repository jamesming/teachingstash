import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Topfold from './components/pages/Topfold/Topfold';
import Files from './components/pages/Files/Files';

import Layout from './components/Layout';
import store from './store';

const app = document.getElementById('app');
// store.subscribe(() => {
//   console.log('store changed: ', console.log(JSON.stringify(store.getState(), null, 2)));
// });
ReactDOM.render(<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Files} />
			<Route path="topfold" name="topfold" component={Topfold} />
		</Route>
	</Router>
</Provider>, app);
