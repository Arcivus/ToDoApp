import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class TodoItem extends Component {

	constructor(props){
		super(props);

		this.state = {text: this.props.text, completed: this.props.completed};

		this.handleDelete = this.handleDelete.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	handleDelete() {
		this.props.deleteTodo(this.props.id);
	}

	handleComplete() {

		this.props.toggleComplete(this.props.id);
		this.setState({completed: !this.state.completed});	
	}

	render() {
		return(
			<li className={this.state.completed ? "completed todo-item" : "todo-item"}
				onClick={this.handleComplete}
			>
				{this.state.text}
	
				<button className="deleteButton" onClick={this.handleDelete}>Delete</button>
			</li>
		);
	}
}

export default connect(null, actions)(TodoItem);