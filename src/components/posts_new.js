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
                    label="Tags" 
                    name="tags"
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

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew); 