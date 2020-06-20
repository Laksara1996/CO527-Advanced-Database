import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createForms } from 'react-redux-form';

import { Answers } from './answers';
import { Questions } from './questions';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			answers: Answers,
			questions: Questions
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
};
