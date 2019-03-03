import React from "react";
import Post from './Post';
import {TextItems} from "./Texts";

class Blog extends React.Component{
    render() {
        const TextItems = this.props.TextItems.map((TextItems, index) => {
            return <Post key={index} title={TextItems.title} text={TextItems.text} author={TextItems.author} created={TextItems.created} image={TextItems.image} fulltext={TextItems.fulltext}></Post>
        });

        return (
            <ul>{TextItems}</ul>
        );
    }
}

export default Blog;
