import React, { Component } from 'react';
import { Button, Col, Label, Input, Form, FormGroup } from 'reactstrap';
import ReactTags from 'react-tag-autocomplete';

import 'react-dropdown/style.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

class AskQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			tags: [],
			displayMethod: 'anonymous',
			suggestions: [
				{ id: 1, name: 'Cancer' },
				{ id: 2, name: 'Cold' },
				{ id: 3, name: 'Fever' },
				{ id: 4, name: 'Gastic' },
				{ id: 5, name: 'Pain' },
				{ id: 6, name: 'Stomache' }
			]
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		// const { title, body, tags, visibility, display } = this.state;
		console.log('Current State is: ' + JSON.stringify(this.state));
		alert('Current State is: ' + this.state);
		event.preventDefault();
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		// alert(name,event.target)
		// console.log(name, event.target.value);
		// console.log(this.state);

		this.setState({
			[name]: value
		});
	}
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onBodyChange = (event) => {
		this.setState({ body: event });
	};

	handleDelete(i) {
		const tags = this.state.tags.slice(0);
		tags.splice(i, 1);
		this.setState({ tags });
	}

	handleAddition(tag) {
		const tags = [].concat(this.state.tags, tag);
		this.setState({ tags });
	}
	render() {
		const { title, body, displayMethod } = this.state;

		return (
			<div className="row row-content">
				<div className="col-12">
					<h3>Ask Question</h3>
				</div>
				<div className="col-12 col-md-9">
					<Form onSubmit={this.handleSubmit}>
						<FormGroup row>
							<Label htmlFor="firstname" md={2}>
								<strong>Title</strong>
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="title"
									name="title"
									placeholder="e.g. How to treat Stomache?"
									value={title}
									onChange={this.handleInputChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="title" md={2}>
								<strong>Body</strong>
							</Label>
							<Col md={10}>
								<ReactQuill
									modules={modules}
									formats={formats}
									value={body}
									onChange={this.onBodyChange}
									placeholder="Body"
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="title" md={2}>
								<strong>Tags</strong>
							</Label>
							<Col md={10}>
								<ReactTags
									tags={this.state.tags}
									suggestions={this.state.suggestions}
									handleDelete={this.handleDelete.bind(this)}
									handleAddition={this.handleAddition.bind(this)}
									allowBackspace={false}
									placeholder={'e.g. Cancer'}
									noSuggestionsText={'No suggestions found'}
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="title" md={2}>
								<strong>Personal Detail Display</strong>
							</Label>
							<Col md={10}>
								<Input
									type="select"
									name="displayMethod"
									className="form-control"
									value={displayMethod}
									onChange={this.handleInputChange}
								>
									<option>Anonymous</option>
									<option>Signed Details</option>
								</Input>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Ask Question
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</div>
		);
	}
}

export default AskQuestion;
