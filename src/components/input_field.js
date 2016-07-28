import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

let todoNextId = 0;

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = { todo: '' };

		this.submitTodo = this.submitTodo.bind(this);
	}

	render() {
		return(
				<form onSubmit={this.submitTodo} className="input-group">
					<input
						placeholder="Type what you're planning to do"
						value={this.state.todo}
						onChange={event => this.setState({todo: event.target.value})}	
					/>
					<button>Submit</button>
				</form>
		);
	}

	submitTodo(e){
		e.preventDefault();
		if(this.state.todo){
			this.props.createTodo(this.state.todo, todoNextId++);
			this.setState({todo: ''});	
		}
	}
}

export default connect(null, actions)(InputField);