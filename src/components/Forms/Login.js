import React, {Component} from 'react'
import './Login.css';

class Login extends Component{
    state = {
        email: '',
        password: '',
        fireerror: ''
    }

    render(){
        return(
            <>
                <form>
                    <input type="text" 
                    className="regField"
                    placeholder="Email"
                    name="email" /> 

                    <input type="password" 
                    className="regField"
                    placeholder="Password"
                    name="password" /> 

                    <input type="submit" className="submitBtn" value="ENTER" />
                </form>
            </>
        );
    }
}

export default Login;