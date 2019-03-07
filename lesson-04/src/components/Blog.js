import React from "react";
import Post from './Post';
import {TextItems} from "./Texts";

class Blog extends React.Component{
    render() {
        const TextItems = this.props.TextItems.map((TextItems, index) => {
            return <Post key={index} {...TextItems}></Post>
        });

        return (
            <ul>{TextItems}</ul>
        );
    }
}

export default Blog;
