import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import _ from 'lodash';
const FIELDS = {
    title: {
        type: 'input',
        label: 'Title',
    },
    categories: {
        type: 'input',
        label: 'Categories',
    },
    content: {
        type: 'textarea',
        label: 'Content',
    },
};

class NewPost extends Component {
    static contextTypes = {
        router: PropTypes.object,
    };
    renderField(field) {
        const {
            meta: { touched, error },
        } = field;
        const myClassName = `form-group ${
            touched && error ? 'has-danger' : ''
        } `;
        return (
            <div className={myClassName}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }
    /*     onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
 */

    onSubmit(values) {
        this.props.createPost(values).then(() => {
            this.context.router.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    const error = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            error[field] = `Enter a ${field}`;
        }
    });
    return error;
}

export default reduxForm({
    validate,
    form: 'myNewPost',
    fields: _.keys(FIELDS),
})(
    connect(
        null,
        { createPost }
    )(NewPost)
);
