import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';
import ReactTags from 'react-tag-autocomplete'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import AppBar from './AppBar'
import * as ROUTES from '../../constant/Route'


const form = {
    width: '100%',
    marginTop: 10,
}

const submit = {
    marginTop: 20,
    backgroundColor: "lightblue",
    color: "black"
}


const AskQuestion = () => (
    <div>
        <AppBar />
        <AskQuestionForm />
    </div>
);
const options = [
    'Public',
    'Registered Users',
    'Users Relevant to Tags'
];

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image', 'video', 'code-block'
]
//const defaultOption = options[0];

class AskQuestionFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            tags: [],
            visibility: '',
            suggestions: [
                { id: 1, name: "Cancer" },
                { id: 2, name: "Cold" },
                { id: 3, name: "Fever" },
                { id: 4, name: "Gastic" },
                { id: 5, name: "Pain" },
                { id: 6, name: "Stomache" }
            ]
        };
    }
    onSubmit = event => {
        const { title, body, tags, visibility } = this.state;
        console.log(title, body, tags, visibility);
        this.props.history.push(ROUTES.MAINPAGE);
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    _onSelect = event => {
        this.setState({ visibility: event.value });
    }
    onBodyChange = event => {
        this.setState({ body: event });
        //console.log(event);
    }

    handleDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    handleAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }
    render() {
        const { title, body, visibility } = this.state;

        return (
            <Container component="main" maxWidth="xs" >
                <form onSubmit={this.onSubmit} style={form}>
                    <TextField
                        name="title"
                        value={title}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Title"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        helperText="Be specific and imagine you’re asking a question to another person"
                    />
                    <ReactQuill
                        modules={modules}
                        formats={formats}
                        value={body}
                        onChange={this.onBodyChange}
                        placeholder="Body"
                    />
                   <div style={{ marginTop: 20 }}/>
                    <Dropdown
                        options={options}
                        required
                        onChange={this._onSelect}
                        value={visibility}
                        placeholder="Select the Visibility"
                    />
                    <div style={{ marginTop: 20 }}>
                        <p>
                            <b>Tags</b><br />
                            Add up to 5 tags to describe what your question is about
                        </p>
                    </div>
                    <ReactTags
                        tags={this.state.tags}
                        suggestions={this.state.suggestions}
                        handleDelete={this.handleDelete.bind(this)}
                        handleAddition={this.handleAddition.bind(this)}
                        allowBackspace={false}
                        placeholder={'e.g. Cancer'}
                        noSuggestionsText={'No suggestions found'}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={submit}
                    >
                        Ask Question
                      </Button>
                </form>
            </Container>
        );
    }
}
const AskQuestionForm = compose(
    withRouter,
)(AskQuestionFormBase);
export default AskQuestion;
export { AskQuestionForm };