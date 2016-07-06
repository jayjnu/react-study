import React, { Component } from 'react';
import {render} from 'react-dom';
import Promptor from './Promptor.jsx';


export default class Search extends Component {
	constructor(){
		super();
		this.state = {
			searchTerm: "React"
		};
	}

	handleChange(event){
		this.setState({searchTerm: event.target.value});
		render(<Promptor output = {this.state.searchTerm}/>, document.getElementById('subRoot'));
	}

	render(){
		return (
			<div>
				Search Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

