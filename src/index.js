import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import InputField from './components/input_field';
import TodoList from './components/todo_list';
import FilterLink from './components/filter_link';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedFilter: "SHOW_ALL" };
		this.setFilter = this.setFilter.bind(this);
	}

	setFilter(selectedFilter) {
		this.setState({selectedFilter});
	}

	render() {
		return(
			<div>
				<h1>ToDo App</h1>
				<InputField />
				<TodoList selectedFilter={this.state.selectedFilter}/>
				<div>
					<p>Show:</p>
					<FilterLink filter="SHOW_ALL" onFilterSelect={this.setFilter} currentFilter={this.state.selectedFilter}>All</FilterLink>
					<FilterLink filter="SHOW_ACTIVE" onFilterSelect={this.setFilter} currentFilter={this.state.selectedFilter}>Active</FilterLink>
					<FilterLink filter="SHOW_COMPLETED" onFilterSelect={this.setFilter} currentFilter={this.state.selectedFilter}>Completed</FilterLink>
				<div>
			</div>
		);
	}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
