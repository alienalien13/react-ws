import React, { Component } from 'react';
import './App.css';

class Task4 extends Component {

	constructor(props){
		super(props);
		this.state = {};

		this.onClickHandle = this.onClickHandle.bind(this);
		this.authorsStructurize = this.authorsStructurize.bind(this);
		this.stringGenerator = this.stringGenerator.bind(this);
		this.teamCoOp = this.teamCoOp.bind(this);
	}

	authorsStructurize(){

		var teams = this.props.teams,
		articles = this.props.articles,
		authors = this.props.authors,
		men = [];

		function Author(id, name, team, articles){
			this.id = id;
			this.name = name;
			this.team = team;
			this.articles = articles;
		}

		for (let author = 0; author < authors.length; author++){

			let mansTeam, mansArticles = [];
			for (let team = 0; team < teams.length; team++){
				
				if ( teams[team].members.indexOf( authors[author].id ) !== -1 ) mansTeam = teams[team]

			}
			for (let art = 0; art < articles.length; art++){
				
				if (articles[art].authors) {
					if ( articles[art].authors.indexOf( authors[author].id ) !== -1 ) mansArticles.push( articles[art].text )
				} else continue

				
			}

			men.push(new Author(authors[author].id, authors[author].name, mansTeam.name, mansArticles));

		}

		return men

	}

	stringGenerator(array){
		
		let strings = [];

		for (let au = 0; au < array.length; au++){

			var plural = '',
				arts = [],
				zero = '',
				str;

			if (array[au].articles === [] || array[au].articles === undefined || array[au].articles === null || array[au].articles.length === 0 ) {

				plural = 's';
				zero = ' 0';
				arts = [];
				str = '';

			} else if (array[au].articles.length === 1) {

				arts.push( `'${array[au].articles[0]}'`);
				str = arts;

			} else if (array[au].articles.length === 2) {

				plural = 's';
				for (let i = 0; i < array[au].articles.length; i++){
					arts.push( `'${array[au].articles[i]}'`);
				}
				str =  arts.join(' and ');

			} else if (array[au].articles.length > 2) {

				plural = 's';

				for (let i = 0; i < array[au].articles.length; i++){
					arts.push( `'${array[au].articles[i]}'`);
				}
				
				var auxArts = [arts[0], arts[1]];
				str = auxArts.join(', ') + ` and ${arts.length - 2} more`;

			}

			strings.push( `${array[au].name} wrote${zero} article${plural} ${str}` )

		}

		return strings.join('\n')

	}

	teamCoOp(team){

		var teamArts = []

		team.forEach( (element) => {
			element.articles.forEach( (el) => {

				teamArts.push(el)

			})
		});

		function unique(arr) {
			var obj = {};
			
			for (var i = 0; i < arr.length; i++) {
				var str = arr[i];
				obj[str] = true;
			}
			
			return Object.keys(obj);
		}

		var artArray = unique(teamArts);

		return `Team '${team[0].team}' co-authored ${artArray.length} out of ${this.props.articles.length} articles`;

	}

	onClickHandle(){

		var auts = this.authorsStructurize();
		
		var newAuts = auts.filter( (author) => {
			if (author.team === 'Webscope 1') return author
		} )

		console.log(this.stringGenerator(newAuts));
		console.log(this.teamCoOp( newAuts )); 
	}

	render() {
		return (
			<fieldset title="task1" className="task1-field">
				<legend>Task 1</legend>
				
				<input type="button" value="Double click first option" id="btn2-task2" onClick={this.onClickHandle}/>
				<textarea id="text-output-task2" placeholder="Output task1"/>

			</fieldset>
		);
	}
}

export default Task4;