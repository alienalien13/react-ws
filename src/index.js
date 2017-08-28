import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.onload = () => {
	var btn2Task2 = document.getElementById('btn2-task2'),
	textOutTask2 = document.getElementById('text-output-task2');

	btn2Task2.addEventListener('click', clickHandle);

	function clickHandle(){

		var count = 1;

		btn2Task2.removeEventListener('click', clickHandle)
		btn2Task2.addEventListener('click', secondClickHandle)

		function secondClickHandle(){
			count++
			textOutTask2.value = 'Double click, second option';
		}

		setTimeout(() => {
			btn2Task2.removeEventListener('click', secondClickHandle)
			btn2Task2.addEventListener('click', clickHandle)
		}, 500)

	}
}