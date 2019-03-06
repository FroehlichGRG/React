import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
{/* import About from './app/components/About'; */}
{/* import Contacts from './app/components/Contacts'; */}
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';


const  app = document.querySelector('#root');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage}/>
            <Route path="/users" component={Users}>
                <Route path=":userId" component={User}/>
            </Route>
            <Route path="/comments" component={Comments}>
                <Route path=":commentId" component={Comment}/>
            </Route>
            <Route path="/posts" component={Posts}>
                <Route path=":postId" component={Post}/>
            </Route>
            {/* <Route path="about" component={About}/> */}
            {/* <Route path="contacts" component={Contacts}/> */}
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
    ,
    app);