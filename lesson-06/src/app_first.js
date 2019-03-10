import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './pages/Main';
import About from './pages/About';
import Contacts from './pages/Contacts';

class App extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () =>
        {
            this.setState({route: window.location.hash.substr(1) })

        })
    }

    render() {
        let Child;
        switch (this.state.route) {
            case '/about': Child = About;
            break;
            case '/contacts': Child = Contacts;
            break;
            default: Child = MainPage;

        }

        console.log(this.state.route);
        return <div>
            <header>Приложение v1</header>
            <ul>
                <li><a href="#/home">Главная</a></li>
                <li><a href="#/about">О нас</a></li>
                <li><a href="#/contacts">Контакты</a></li>
            </ul>
            <div>
                <Child/>
            </div>
        </div>
    }
}

const app = document.getElementById('app');

ReactDOM.render(
    <App/>,
app);