import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderField(field) {
        // ...field.input is object which contains a bunch of event handler
        // and a bunch of differnt props e.g. onChange onBlur on Focus and value of hte input
        return (
            <div className="form-group">
                <label htmlFor={field.input.name}>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return(
            <form>
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
})(PostsNew); 