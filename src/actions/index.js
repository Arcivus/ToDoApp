export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export function createTodo(text, objectId){
	const newTodo = {id: objectId, text: text, completed: false};

	return {
		type: CREATE_TODO,
		payload: newTodo
	}
}

export function deleteTodo(id){
	return {
		type: DELETE_TODO,
		payload: id
	}
}

export function toggleComplete(id) {
	return {
		type: TOGGLE_COMPLETE,
		payload: id
	}
}