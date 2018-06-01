import { createStore, applyMiddleware, compose } from 'redux';

const reducer = (state, action) => {
	if (action.type === "ADD_TO_LISTPETS") {
		return {
			...state,
			pets: state.pets.concat(action.pet)
		};
	} else if(action.type == "FINISH_EDITING"){
		return {
			...state,
			isEditing: action.isEditing
		}		
	}
	return state;
}

const logger = store => next => action => {
	console.log('dispatching', action);
	console.log('next state', store.getState());
	return next(action)
}

export default createStore(reducer, { pets: [], isEditing: '' }, applyMiddleware(logger));
