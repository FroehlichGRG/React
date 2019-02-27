import React from "react";
import Contentitem from './Articlecreation';

class Content extends React.Component{
    render() {
        const contentitems = this.props.contentitems.map((contentitem, index) => {
            return <Contentitem key={index}><h3>{contentitem.title}</h3><div>{contentitem.text}</div></Contentitem>
        });

        return (
            <ul>{contentitems}</ul>
        );
    }
}

export default Content;
