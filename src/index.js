import 'babel-polyfill';
import 'babel-core/register';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import reduxStore from './lib/createStore';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	rootElement
);
