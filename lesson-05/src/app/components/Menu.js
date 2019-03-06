import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="90" height="90" alt="" />
                        {this.props.brand}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}