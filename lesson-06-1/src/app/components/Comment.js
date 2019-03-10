import React from 'react';
import {Link} from 'react-router';

export default class Comment extends  React.Component {
    render() {
        return(
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/comments/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                    <p><a href="mailto:{this.props.email}">{this.props.email}</a></p>
                </div>
            </div>
        );
    }
}