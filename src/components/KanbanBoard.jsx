/**
 * Created by zach on 2016. 7. 5..
 */
import React, { Component } from 'react';
import List from './List.jsx';

class KanbanBoard extends Component {
	render(){
		return(
			<div className="app">
				<List id="todo" title="To Do" cards={
					this.props.cards.filter( (card) => card.status === 'todo' )
				}/>
				<List id="in-progress" title="In Progress" cards={
					this.props.cards.filter( (card) => card.status === 'in-progress' )
				}/>
				<List id="todo" title="Done" cards={
					this.props.cards.filter( (card) => card.status === 'done' )
				}/>
			</div>
		)
	}
}

export default KanbanBoard;