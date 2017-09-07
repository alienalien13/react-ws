import React, { Component } from 'react';
import './App.css';

class Task4 extends Component {

	constructor(props){
		super(props);
		this.state = {};

		this.onClickHandle1 = this.onClickHandle1.bind(this);
		this.onClickHandle2 = this.onClickHandle2.bind(this);
		this.resultGen = this.resultGen.bind(this);
		this.authorsStructurize = this.authorsStructurize.bind(this);
		this.stringGenerator = this.stringGenerator.bind(this);
		this.teamCoOp = this.teamCoOp.bind(this);
	}

	// return new array, sorted by authors
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

	// return string contain info about which author has written which articles
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

	// return string - info about how much articles was co-authored with which team
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

	// eventually text
	resultGen(team){
		var auts = this.authorsStructurize();
		
		var newAuts = auts.filter( (author) => {
			if (author.team === team) return author
		} )

		var result = [this.stringGenerator(newAuts), '----------', this.teamCoOp( newAuts )].join('\n');
		this.setState({
			str: result
		})
	}

	onClickHandle1(){

		this.resultGen('Webscope 1');
		
	}

	onClickHandle2(){
		
		this.resultGen('Webscope 2');
		
	}

	render() {
		return (
			<fieldset title="task4" className="task1-field">
				<legend>Task 4</legend>
				
				<input type="button" value="Webscope 1" id="btn1-task4" onClick={this.onClickHandle1}/>
				<input type="button" value="Webscope 2" id="btn1-task4" onClick={this.onClickHandle2}/>
				<textarea id="text-output-task4" rows="10" placeholder="Output task4" value={this.state.str}/>

			</fieldset>
		);
	}
}

export default Task4;