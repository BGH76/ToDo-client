import React, { useState } from "react";

import useLogin from "../hooks/useLogin";

const Login = () => {

    const{userLogin} = useLogin();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('hidden');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === '') return;
        const response = userLogin(username, password);
        if(!response) setLoginError('');
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
                    <button className="ui login button" type="button">Create Account</button>
                </div>
            </form>
        </div>
    );
}
export default Login;