import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
    render() {
        return(
            <div></div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew); 