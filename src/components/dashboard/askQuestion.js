import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

import AppBar from './appBar'
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
const INITIAL_STATE = {
    title: '',
    body: '',
    tags: '',
};
class AskQuestionFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { title, body, tags } = this.state;
        console.log(title, body, tags);
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { title, body, tags } = this.state;

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
                    <TextField
                        name="body"
                        value={body}
                        onChange={this.onChange}
                        type="body"
                        placeholder="Body"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        helperText="Include all the information someone would need to answer your question"
                    />
                    <TextField
                        name="tags"
                        value={tags}
                        onChange={this.onChange}
                        type="tags"
                        placeholder="Tags"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        helperText="Add up to 5 tags to describe what your question is about"
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