import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import Blog from './Blog';
import WelcomeModal from './WelcomeModal';
import {TextItems} from "./Texts";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css'


class App extends React.Component{
    render() {
        return <div>
            <Header />
            <div className="container">
            <Blog TextItems = {TextItems}/>
            <WelcomeModal />
        </div>
            <Footer/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));