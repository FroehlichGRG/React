import React, { Component } from 'react';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
    }

    render() {

        const { items } = this.state;

        return (
            <ul>
                {items.map(item =>
                    <li key={item.title}>
                        {item.title}
                        {item.body}
                    </li>
                )}
            </ul>
        );
    }
}

export default Posts;
