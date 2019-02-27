import React from "react";
import Menuitem from './Menuitem';

 class Menu extends React.Component{
    render() {
        const items = this.props.items.map((item, index) => {
            return <Menuitem key={index} href={item.href}>{item.title}</Menuitem>
        });

        return (
            <ul>{items}</ul>
        );
    }
}

export default Menu;
