import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Login from './Login';
import {menuItems} from "./MenuArray";
import {contentItems} from "./texts";

class App extends React.Component{

    onSubmit = fields => {
        console.log('Login data', fields)
    };

    render() {
        return (
            <div>
                <Header/>
                <Menu items={menuItems}/>
                <Login onSubmit={fields => this.onSubmit(fields)}/>
                <Content contentitems = {contentItems}/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
