import React from 'react';

class Header extends React.Component{

    render() {
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="80" height="80" alt="" /></a>
            <h1>Домашнее задание №4</h1>
        </nav>);
    }
}

export default Header;