/**
 * Created by zach on 2016. 7. 11..
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import Container from './Container.jsx';

class App extends Component{
	render(){
		return(<Container/>);
	}
}

render(<App/>,  document.getElementById('root'));

export default App;