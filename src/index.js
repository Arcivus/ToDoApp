import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

	getFilterProperties(filterValue) {
		const props = {
			filter: filterValue,
			onFilterSelect: this.setFilter, 
			currentFilter: this.state.selectedFilter
		};

		return props;
	}

	render() {
		return(
			<div className="app">
				<h1>ToDo App</h1>
				<InputField />
				<TodoList selectedFilter={this.state.selectedFilter}/>
				<div className="filter-bar">
					<strong>Show:</strong>
					<FilterLink {...this.getFilterProperties("SHOW_ALL")}>All</FilterLink>
					<FilterLink {...this.getFilterProperties("SHOW_ACTIVE")}>Active</FilterLink>
					<FilterLink {...this.getFilterProperties("SHOW_COMPLETED")}>Completed</FilterLink>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
