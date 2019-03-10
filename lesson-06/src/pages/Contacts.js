import React from 'react';

export default class Contacts extends  React.Component {
    render() {
        console.log(this);
        return(
            <div>
                <h1>Contacts</h1>
                <p>Contacts page</p>
                <p>Номер страницы {this.props.match.params.number}</p>
                <p>Action: {this.props.match.params.action}</p>
            </div>
        );
    }
}