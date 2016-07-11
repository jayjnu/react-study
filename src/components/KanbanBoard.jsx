/**
 * Created by zach on 2016. 7. 5..
 */
import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from './List.jsx';



class KanbanBoard extends Component {
	render(){
		return(
			<div className="app">
				<List id="todo"
					  taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  title="To Do"
					  cards={
					  	this.props.cards.filter( (card) => card.status === 'todo' )
					  	}
				/>
				<List id="in-progress"
					  taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  title="In Progress"
					  cards={
						this.props.cards.filter( (card) => card.status === 'in-progress' )
					}
				/>
				<List id="todo"
					  taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  title="Done"
					  cards={
					  	this.props.cards.filter( (card) => card.status === 'done' )
					 }
				/>
			</div>
		)
	}
}

KanbanBoard.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object,
	cardCallbacks: PropTypes.object
};

export default DragDropContext(HTML5Backend)(KanbanBoard);