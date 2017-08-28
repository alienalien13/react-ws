import React, { Component } from 'react';
import './App.css';

class Task1 extends Component {

	render() {
		return (
			<fieldset title="task1" className="task1-field">
				<legend>Task 1</legend>
				
				<input type="button" value="Double click first option" id="btn2-task2"/>
				<textarea id="text-output-task2" placeholder="Output task1"/>

			</fieldset>
		);
	}
}

export default Task1;