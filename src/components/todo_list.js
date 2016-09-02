import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo_item';


class TodoList extends Component {
	renderTodo(todoData) {

		return <TodoItem
			key={todoData.id}
			text={todoData.text}
			completed={todoData.completed}
			id={todoData.id}
		/>
	}

	getVisibleTodos(todos, filter) {
		switch(filter){
			case "SHOW_ALL":
				return todos;
			case "SHOW_ACTIVE":
				return todos.filter(todo => !todo.completed);
			case "SHOW_COMPLETED":
				return todos.filter(todo => todo.completed);
		}
	}

	render() {
		let visibleTodos = this.getVisibleTodos(this.props.todos, this.props.selectedFilter);
		return(
			<ul className="todo-list">
				{visibleTodos.map(this.renderTodo)}
			</ul>
		);
	}
}

function mapStateToProps({todos}) {
	return {todos};
}

export default connect(mapStateToProps)(TodoList);
