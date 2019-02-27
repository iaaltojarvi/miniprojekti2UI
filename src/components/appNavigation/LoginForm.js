import React, { Component } from 'react';
import { createuser } from '../../serviceClient';


class LoginForm extends Component {
    state = {username: "", password: ''};
    handleNameChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({username: uusiarvo});
    }
    handlePasswordChange = (e) => {
        const uusiarvo = e.target.value;
        this.setState({password: uusiarvo});
    }
    handleCreateClick = (e) => {
        e.preventDefault();
        createuser(this.state, ()=> {
            this.props.history.push("/");           
        })
        this.setState({username: "", password: ''});
    }


    render() {
        return(
            
            <form>
                <input type="text" placeholder="Name" 
               value={this.state.username} onChange={this.handleNameChange}/><br />
                <input type="text" placeholder="Password" 
               value={this.state.password} onChange={this.handlePasswordChange}/><br />
                <input type="submit" value="Login" onClick={this.handleCreateClick}/>
            </form>
            
        );
        }
    }

export default LoginForm;
