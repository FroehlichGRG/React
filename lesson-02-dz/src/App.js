const externalfile1 = {
    width: "100%",
    margin: "30px auto",
    backgroundColor: "#CC0000",
    minHeight: "100px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    padding: "2px 6px 0 2px"
};

import React from 'react';
import ReactDOM from 'react-dom';

import External1 from './externalfile1';
import External2 from './externalfile2';
import Article from './externalfile3';
import {articles} from "./texts";

class App extends React.Component{
    render() {
        return <div style = {externalfile1}>
            <h2>Test text</h2>
            <br />
            <span>Text text</span>
        </div>;
    }
}

ReactDOM.render(<External1/>, document.getElementById('external-file-1'));
ReactDOM.render(<External2 firstName={'Max'} lastName={'Max last name'}/>, document.getElementById('external-file-2'));
ReactDOM.render(<Article article = {articles[2]}/>, document.getElementById('external-file-3'));
ReactDOM.render(<App/>, document.getElementById('root'));

