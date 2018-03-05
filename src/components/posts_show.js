import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {
    componentDidMount() {
        // come from wildcard in the url
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                Posts Show!
            </div>
        );
    }
}

//this.props === ownProps
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);