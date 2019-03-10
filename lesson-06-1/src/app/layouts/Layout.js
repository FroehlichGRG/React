import React from 'react';
import Menu from '../components/Menu';
import Menuitem from "../components/Menuitem";

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.brand = 'React blog!';
    }

    isActive(href){
        return window.location.pathname === href;
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <Menuitem href="/" active={this.isActive('/')}>
                        Main
                    </Menuitem>
                    <Menuitem href="/users" active={this.isActive('/users')}>
                        Users
                    </Menuitem>
                    <Menuitem href="/comments" active={this.isActive('/comments')}>
                        Comments
                    </Menuitem>
                    <Menuitem href="/posts" active={this.isActive('/posts')}>
                        Posts
                    </Menuitem>
                    <Menuitem href="/posts2" active={this.isActive('/posts2')}>
                        Posts2
                    </Menuitem>
                    <Menuitem href="/users2" active={this.isActive('/users2')}>
                        Users 2
                    </Menuitem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">Copyleft &copy; 2019</footer>
            </div>
        );
    }
}

