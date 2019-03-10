import React from 'react';
import UserStore from '../stores/userStore';
import {getUsers, addUser} from '../actions/userActions';
import UserList2 from '../components/UsersList2';

export default class Users2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.newUser = this.newUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser(){
        const name = 'Name Family';
        const username = 'Some city';
        const email = 'mail@mail.com';
        const phone = '1-770-736-8031 x56442';
        const website = 'google.com';

        addUser(name, username, email, phone, website);
    }

    onUserChange()
    {
        this.setState({users: UserStore.users});
    }

    componentDidMount() {
        getUsers();
        UserStore.on('change', this.onUserChange);
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }

    render() {
        return(
            <div>
                <button className="btn btn-primary" onClick={this.newUser}>Add new user</button>
                <UserList2 users={this.state.users}/>
            </div>

        );
    }
}