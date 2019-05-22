import React, { Component } from 'react';
import { fetchPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ViewPost extends Component {
    static contextTypes = {
        router: PropTypes.object,
    };
    componentWillMount() {
        const { id } = this.props.params;
        this.props.fetchPost(id);
    }
    onDelete() {
        const { id } = this.props.params;
        this.props.deletePost(id).then(() => {
            this.context.router.push('/');
        });
    }
    render() {
        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDelete.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

/* function mapStateToProps({ posts }, OwnProps) {
    return { post: posts[OwnProps.params.id] };
}
 */
function mapStateToProps({ posts }) {
    return { post: posts.post };
}

export default connect(
    mapStateToProps,
    { fetchPost, deletePost }
)(ViewPost);
