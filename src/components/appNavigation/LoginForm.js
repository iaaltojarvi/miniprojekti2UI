import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ username: uusiarvo });
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({ password: uusiarvo });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.password) {
            alert('Please fill both username and password');
            return;
        }
        try {
            let response = await fetch('/api/users/login', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            let jsonRes = await response.json();
            if (!jsonRes.success) throw new Error("Unauthorized user!");
            if (jsonRes.success && jsonRes.token && jsonRes.id) {
                this.setState({ username: '', password: '' });
                this.props.onLogin(jsonRes);
                this.props.history.push('/');
            }
        } catch (error) {
            alert('Login failed! ' + error);
            this.setState({ username: '', password: '' });
        }
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Username"
                    value={this.state.username} onChange={this.handleNameChange} /><br />
                <input type="password" placeholder="Password"
                    value={this.state.password} onChange={this.handlePasswordChange} /><br />
                <input type="submit" value="Login" onClick={this.handleSubmit} />
            </form>
        );
    }
}

export default LoginForm;
