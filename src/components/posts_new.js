import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    renderTitleField(field) {
        // ...field.input is object which contains a bunch of event handler
        // and a bunch of differnt props e.g. onChange onBlur on Focus and value of hte input
        return (
            <div>
                <input
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
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew); 