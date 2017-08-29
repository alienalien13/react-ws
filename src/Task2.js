import React, { Component } from 'react';
import './App.css';

class Task1 extends Component {

	render() {
		return (
			<fieldset title="task2" className="task1-field">
				<legend>Task 2</legend>
				
				<input type="button" value="Double click" id="btn2-task2"/>
				<textarea id="text-output-task2" placeholder="Output task2"/>

			</fieldset>
		);
	}
}

export default Task1;