import { CREATE_TODO, DELETE_TODO, TOGGLE_COMPLETE } from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case CREATE_TODO:
			return [action.payload, ...state];
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload);
		case TOGGLE_COMPLETE:
		
			return state.map(todo => {
				if(todo.id !== action.payload){
					return todo;
				}
				let toggled = todo;
				toggled.completed = !todo.completed;
				return toggled;
			});
	}
	return state;
}