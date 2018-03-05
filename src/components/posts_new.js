import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
    renderField(field) {
        // ...field.input is object which contains a bunch of event handler
        // and a bunch of differnt props e.g. onChange onBlur on Focus and value of the input
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label htmlFor={field.input.name}>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title for Post" 
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories" 
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content" 
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger-outline">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // conols.elog(values) -> { title: 'asdf', categories:'asdf', content:'asdf'}
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, reduc form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
); 