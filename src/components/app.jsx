/**
 * Created by zach on 2016. 7. 12..
 */
import React, { Component } from 'react';
import { render } from 'react-dom';

import About from './About.jsx';
import Home from './Home.jsx';
import Repos from './Repos.jsx';

class App extends Component{
	constructor(){
		super(...arguments);
		this.state = {
			route: window.location.hash.substr(1)
		};
	}
	
	componentDidMount(){
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}

	render(){
		var Child;
		switch(this.state.route){
			case '/about': Child = About; break;
			case '/repos': Child = Repos; break;
			default: Child = Home;
		}

		return (
			<div>
				<header><a href="#/">App</a></header>
				<nav>
					<ul>
						<li><a href="#/about">About</a></li>
						<li><a href="#/repos">Repos</a></li>
					</ul>
				</nav>
				<Child/>
			</div>
		);

		// menu 태그는 firefox에서만 지원하므로 nav로 대체
	}
}

render(<App/>, document.getElementById('root'));

export default App;