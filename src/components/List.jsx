/**
 * Created by zach on 2016. 7. 5..
 */
import React, { Component } from 'react';
import Card from './Card.jsx';

class List extends Component {
	render(){
		var cards = this.props.cards.map((card, i) => {
				return <Card id={card.id} title={card.title} description={card.description} tasks={card.tasks} key={i}/>;
			});

		return(
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
}

export default List;