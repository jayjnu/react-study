/**
 * Created by zach on 2016. 7. 5..
 */
import React, { Component, PropTypes } from 'react';
import List from './List.jsx';

class KanbanBoard extends Component {
	render(){
		return(
			<div className="app">
				<List id="todo" taskCallbacks={this.props.taskCallbacks} title="To Do" cards={
					this.props.cards.filter( (card) => card.status === 'todo' )
				}/>
				<List id="in-progress" taskCallbacks={this.props.taskCallbacks} title="In Progress" cards={
					this.props.cards.filter( (card) => card.status === 'in-progress' )
				}/>
				<List id="todo" taskCallbacks={this.props.taskCallbacks} title="Done" cards={
					this.props.cards.filter( (card) => card.status === 'done' )
				}/>
			</div>
		)
	}
}

KanbanBoard.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object
};

export default KanbanBoard;