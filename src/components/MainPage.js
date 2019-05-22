import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

class MainPage extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <span className="pull-xs-right">{post.categories}</span>
                    <Link to={`/post/${post.id}`}>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add new Post
                    </Link>
                </div>
                <h1>POSTS</h1>
                <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts: posts.all };
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(MainPage);
