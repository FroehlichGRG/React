import React from 'react';

export default class Contacts extends  React.Component {
    render() {
        console.log(this.props.c)
        return(
            <div>
                <h1>Контакты</h1>
                <p>Email: 1@2.ru</p>
                <p>Phone: +7 (000) 000-00-00</p>
                <p>Номер офиса: {this.props.params.number}</p>
            </div>
        );
    }
}