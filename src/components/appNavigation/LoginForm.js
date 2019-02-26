import React, { Component } from 'react';
//import { createquote } from "../serviceclient";

class LoginForm extends Component {
    state = {email: "", password: ''};
    handleEmailChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({email: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
    }
    handleCreateClick = (e) => {
        e.preventDefault();
    }


    render() {
        return(
            <form>
                <input type="text" placeholder="Email" 
               value={this.state.email} onChange={this.handleEmailChange}/>
                <input type="text" placeholder="Password" 
               value={this.state.password} onChange={this.handlePasswordChange}/>
                <input type="submit" value="Login" onClick={this.handleCreateClick}/>
            </form>

        );
        }
    }

export default LoginForm;