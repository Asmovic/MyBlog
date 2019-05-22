import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <h2 className="text-md-center" style={{ color: 'purple' }}>
                    Welcome to Asmovic Blog
                </h2>
                {this.props.children}
            </div>
        );
    }
}
