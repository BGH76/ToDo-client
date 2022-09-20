import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { httpUserLogin } from "../httpActions";

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('hidden');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(username === '' || password === '') return;
        const response = await httpUserLogin(username, password);
        switch(response.status) {
            case "true":
                localStorage.setItem('userId', response.userId);
                navigate('/home');
                break;
            case "invalidPassword":
                setLoginError('');
                localStorage.removeItem('userId') // Remove after testing
                break;
            case "invalidUsername" :
                setLoginError('');
                break;
            default:
                console.log("Something went wrong");
        }
    }

    const goToCreateAccount = () => {
        navigate('/register');
    }

    return(
        <div className="loginbox">
            <div className="login-title">
                TODO-List
            </div>
            <form className="ui form login" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" value={`${username}`} onChange={(e)=>setUsername(e.target.value)} onFocus={()=>setLoginError('hidden')} placeholder="username" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" value={`${password}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setLoginError('hidden')} placeholder="Password" />
                </div>
                <div className={`error ${loginError}`}>
                    Invalid username or password
                </div>
                <div className="btn-div">
                    <button className="ui login button" type="submit">Login</button>
                    <button className="ui login button" type="button" onClick={()=>goToCreateAccount()}>Create Account</button>
                </div>
            </form>
        </div>
    );
}
export default Login;