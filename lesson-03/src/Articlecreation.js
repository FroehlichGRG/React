import React from "react";

class Contentitem extends React.Component{
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Contentitem;