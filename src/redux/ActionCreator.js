import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addAnswer = (answer) => ({
	type: ActionTypes.ADD_ANSWER,
	payload: answer
});

export const addQuestion = (question) => ({
	type: ActionTypes.ADD_QUESTION,
	payload: question
});

export const postAnswer = () => (dispatch) => {
	const newAnswer = {};
	return fetch(baseUrl + '', {
		method: 'POST',
		body: JSON.stringify(newAnswer),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addAnswer(response)))
		.catch((error) => {
			alert('Error ' + error.message);
		});
};

export const postQuestion = () => (dispatch) => {
	const newQuestion = {};
	return fetch(baseUrl + '', {
		method: 'POST',
		body: JSON.stringify(newQuestion),
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addQuestion(response)))
		.catch((error) => {
			alert('Error ' + error.message);
		});
};

export const fetchAnswers = () => (dispatch) => {
	// dispatch(answersLoading(true));

	return fetch(baseUrl + '')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((answers) => dispatch(addAnswers(answers)));
	// .catch((error) => dispatch(answersFailed(error.message)));
};

export const fetchQuestions = () => (dispatch) => {
	// dispatch(qustionsLoading(true));

	return fetch(baseUrl + '')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((questions) => dispatch(addQuestions(questions)));
	// .catch((error) => dispatch(questionsFailed(error.message)));
};

export const addAnswers = (answers) => ({
	type: ActionTypes.ADD_ANSWERS,
	payload: answers
});

export const addQuestions = (questions) => ({
	type: ActionTypes.ADD_QUESTIONS,
	payload: questions
});
