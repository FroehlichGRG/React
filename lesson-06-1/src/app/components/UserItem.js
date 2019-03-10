import React from "react";
import {Link} from "react-router";

export default class UserItem extends React.Component {
    render() {
        return(
            <div className="card border-secondary mb-3">
                <h3 className="card-header">
                    <Link to={`/users/${this.props.id}`}>{this.props.name}</Link>
                </h3>
                <div className="card-body text-secondary">
                    <div>{this.props.username}</div>
                    <div><a href="mailto:{this.props.email}">{this.props.email}</a></div>
                    <div>{this.props.phone}</div>
                    <div>{this.props.website}</div>
                </div>
            </div>
        );
    }
}