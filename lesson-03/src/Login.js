import React from "react";

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form action="#" method="post">
                <input
                    placeholder="Login"
                    value={this.state.username}
                    onChange={e => this.setState({username: e.target.value })}/>
                <br />
                <input
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value })}/>
                <br />
                <button onClick={e => this.onSubmit(e)}>Login</button>
            </form>
        );
    }
}

export default Login;