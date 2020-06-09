import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/scss/styles.scss';

import AnimatedSwitch from './assets/scripts/routes';

class App extends Component {

	render() {
		return (
			<HashRouter>
				<AnimatedSwitch />
			</HashRouter>
		);
	}
}

export default App;