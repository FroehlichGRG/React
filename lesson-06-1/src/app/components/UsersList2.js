import React from 'react';
import UserItem from './UserItem';

export default class UserList2 extends React.Component {
    render() {
        if (!this.props.users.length)
        {
            return null;
        }

        const users = this.props.users.map((user, index) => {
            return <UserItem key={index} {...user} />
        });

        return (
            <div>
                <h1>Users 2</h1>
                <div>
                    {users}
                </div>
            </div>
        )
    }
}