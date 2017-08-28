import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task1 extends Component {

	constructor(props){
		super(props);
		this.state = {}

		this.onChangeInput1 = this.onChangeInput1.bind(this);
		this.onChangeInput2 = this.onChangeInput2.bind(this);
		this.firstToUpper = this.firstToUpper.bind(this);
		this.eachFirstToUpper = this.eachFirstToUpper.bind(this);
	}

	firstToUpper(value){
		return value[0].toUpperCase() + value.substr(1);
	}
	eachFirstToUpper(value){
		var newString,
			words = value.split(' ');
		
		for (let word = 0; word < words.length; word++){
			if(words[word]) words[word] = this.firstToUpper(words[word]);
		}
	
		newString = words.join(' ');
	
		return newString
	}

	onChangeInput1(ev){
		this.setState({
			outputText: this.firstToUpper(ev.target.value)
		})
	}
	onChangeInput2(ev){
		this.setState({
			outputText2: this.eachFirstToUpper(ev.target.value)
		})
	}

	render() {
	return (
		<fieldset title="task1" className="task1-field">
			<legend>Task 1</legend>
			
			<div>First letter to toUpperCase</div>
			<textarea id="text-input-task1" placeholder="Fill in this textarea by a several words" defaultValue={''} value={this.state.inputText} onChange={this.onChangeInput1}/>
			<textarea id="text-output-task1" placeholder="Output task1" defaultValue={''} value={this.state.outputText}/>

			<div>Each letter to toUpperCase</div>
			<textarea id="text-input2-task1" placeholder="Fill in this textarea by a several words" defaultValue={''} value={this.state.inputText} onChange={this.onChangeInput2}/>
			<textarea id="text-output2-task1" placeholder="Output task1" defaultValue={''} value={this.state.outputText2}/>

		</fieldset>
	);
	}
}

export default Task1;