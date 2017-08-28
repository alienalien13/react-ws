import React, { Component } from 'react';
import './App.css';
import Task1 from './Task1.js';
import Task2 from './Task2.js';
import Task3 from './Task3.js';
import Task4 from './Task4.js';


const articles = [
	{id: 1, text: 'MobX in practice', authors: [3]},
	{id: 33, text: 'RxJS and redux-observable', authors: [1, 2, 3, 5, 6,
	7]},
	{id: 23, text: 'Firebase', authors: [7, 2, 3]},
	{id: 333, text: 'Really cool article'},
	{id: 1234, text: 'Ramda.js and Redux combined', authors: [2]},
	{id: 2, text: 'CSS in JS', authors: [3, 5]}
]
const authors = [
	{id: 1, name: 'Oliver'},
	{id: 2, name: 'Jan'},
	{id: 3, name: 'Jakub'},
	{id: 4, name: 'Peter'},
	{id: 5, name: 'Tomas'},
	{id: 6, name: 'Drahoslav'},
	{id: 7, name: 'Honza'}
]
const teams = [
	{id: 1, name: 'Webscope 1', members: [1,2,3,4]},
	{id: 2, name: 'Webscope 2', members: [5,6,7]}
]

class App extends Component {
	render() {
		return (
			<article>
				<Task1/>
				<Task2/>
				<Task3/>
				<Task4 articles={articles} authors={authors} teams={teams}/>
			</article>
		);
	}
}

export default App;
