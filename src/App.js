import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task1 from './Task1.js';
import Task2 from './Task2.js';
import Task3 from './Task3.js';

class App extends Component {
	render() {
		return (
			<article>
				<Task1/>
				<Task2/>
				<Task3/>
			</article>
		);
	}
}

export default App;
