import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm } from 'react-redux-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function RenderQuestion({ question }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<Card>
				<CardBody>
					<CardTitle>{question.question}</CardTitle>
					<CardText>{question.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderAnswers({ answers, postAnswer, questionId }) {
	if (answers != null)
		return (
			<div className="col-12 col-md-5 m-1">
				<h4>Answers</h4>
				<ul className="list-unstyled">
					{answers.map((answer) => {
						return (
							<li key={answer.id}>
								<p>{answer.answer}</p>
							</li>
						);
					})}
				</ul>
				<AnswerForm questionId={questionId} postAnswer={postAnswer} />
			</div>
		);
	else return <div />;
}

const modules = {
	toolbar: [
		[ { header: '1' }, { header: '2' }, { font: [] } ],
		[ { size: [] } ],
		[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
		[ { list: 'ordered' }, { list: 'bullet' } ],
		[ 'link', 'image', 'video' ],
		[ 'clean' ],
		[ 'code-block' ]
	]
};

const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block'
];

class AnswerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ''
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		this.toggleModal();
		this.props.postAnswer(this.props.questionId, values.answer);
	}

	onBodyChange = (event) => {
		this.setState({ answer: event });
	};

	render() {
		const { answer } = this.state;
		return (
			<div>
				<h4> Your Answer</h4>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg" /> Post Your Answer
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Post Your Answer</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<ReactQuill
								modules={modules}
								formats={formats}
								value={answer}
								onChange={this.onBodyChange}
								placeholder="Answer"
							/>
							<Button type="submit" className="bg-primary">
								Post Your Answer
							</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const QuestionDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3>{props.question.title}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<RenderQuestion dish={props.question} />
				<RenderAnswers comments={props.answers} postAnswer={props.postAnswer} questionId={props.question.id} />
			</div>
		</div>
	);
};

export default QuestionDetail;
