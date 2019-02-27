import React from "react";

 class Menuitem extends React.Component{
    render() {

        return (
            <li><a href={this.props.href}>{this.props.children}</a></li>
        );
    }
}

export default Menuitem;