import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Topfold from './components/Topfold';
import Files from './components/Files';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

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
			<Route path="topfold/:name" name="topfold" component={Topfold} />
		</Route>
	</Router>
</Provider>, app);
