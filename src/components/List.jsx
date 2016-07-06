/**
 * Created by zach on 2016. 7. 5..
 */
import React, { Component, PropTypes } from 'react';
import Card from './Card.jsx';

class List extends Component {
	render(){
		var cards = this.props.cards.map((card) => {
				return (<Card id={card.id}
							  title={card.title}
							  color={card.color}
							  description={card.description}
							  tasks={card.tasks}
							  key={card.id}
						/>);
			});

		return(
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
}


List.propTypes = {
	title: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object)
};


export default List;