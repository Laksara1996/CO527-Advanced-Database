import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form';

import EditProfile from './accounts/EditProfileComponent';
import { Login } from './accounts/LoginComponent';
import Header from './dashboard/HeaderComponent';
import Footer from './dashboard/FooterComponent';
import AskQuestion from './dashboard/AskQuestionComponent';
import Home from './dashboard/HomeComponent';
import Profile from './accounts/ProfileComponent';
import QuestionDetail from './dashboard/QuestionDetails';
import { fetchAnswers, fetchQuestions, postAnswer, postQuestion } from '../redux/ActionCreator';

const mapStateToProps = (state) => {
	return {
		answers: state.answers,
		questions: state.questions
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchAnswers: () => {
		dispatch(fetchAnswers());
	},
	fetchQuestions: () => {
		dispatch(fetchQuestions());
	},
	postAnswer: () => {
		dispatch(postAnswer);
	},
	postQuestion: () => {
		dispatch(postQuestion());
	}
});

class Main extends Component {
	componentDidMount() {
		this.props.fetchAnswers();
		this.props.fetchQuestions();
	}
	render() {
		const QuestionWithId = ({ match }) => {
			return (
				<QuestionDetail
					question={
						this.props.questions.questions.filter(
							(question) => question.id === parseInt(match.params.question, 10)
						)[0]
					}
					postAnswer={this.props.postAnswer}
				/>
			);
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/home" component={() => <Home questions={this.props.questions} />} />
					<Route exact path="/askquestion" component={AskQuestion} />
					<Route
						exact
						path="/profile"
						component={() => <Profile questions={this.props.questions} answers={this.props.answers} />}
					/>
					<Route exact path="/editprofile" component={EditProfile} />
					<Route path="/home/:questionId" component={QuestionWithId} />
					<Redirect to="/login" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
