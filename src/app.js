import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './components/Layout';
import Templates from './components/Templates';
import store from './store';

const app = document.getElementById('app');

// store.subscribe(() => {
//   console.log('store changed: ', console.log(JSON.stringify(store.getState(), null, 2)));
// });

ReactDOM.render(<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Templates} />
		</Route>
	</Router>
</Provider>, app);
