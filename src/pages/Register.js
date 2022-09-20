import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { httpCheckUsername, httpRegisterNewUser } from "../httpActions";

const Register = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastNsme] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [emailError, setEmailError] = useState('hidden');
    const [usernameError, setUsernameError] = useState('hidden');
    const [passwordError, setPasswordError] = useState('hidden');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [accountCreationError, setAccountCreationError] = useState('hidden');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(firstName === '' ||
            lastName === '' ||
            email === '' ||
            username === '' ||
            password === '' ||
            passwordTwo === '') return;
        if(!email.match(/\S+@\S+\.\S+/)) {
            setEmailError('');
            return;
        }
        if(await httpCheckUsername(username)) {
            setUsernameError('');
            return;
        }
        if(password.length < 8 || !password.match(/[~'!@#$%^&*?.]/)) {
            setPasswordErrorMessage(':Required length 8 plus 1 special char');
            setPasswordError('');
            return;
        }
        if(password !== passwordTwo) {
            setPasswordErrorMessage(':Passwords must match');
            setPasswordError('');
            return;
        }
        const result = await httpRegisterNewUser(firstName, lastName, email, username, password);
        if(result) {
             navigate('/')
        }
        else {
            setAccountCreationError('');
            return;
        }
    }

    return(
        <div className="loginbox registerbox">
            <div className="login-title">
                TODO-List
            </div>
            <form className="ui form login" onSubmit={handleSubmit}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={`${firstName}`} onChange={(e)=>setFirstName(e.target.value)} placeholder="FirstName" />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={`${lastName}`} onChange={(e)=>setLastNsme(e.target.value)} placeholder="Last Name" />
                </div>
                <div className="field">
                    <label>Email<span className={`error ${emailError}`}> :Must be valid email</span></label>
                    <input type="text" name="email" value={`${email}`} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setEmailError('hidden')} placeholder="Email" />
                </div>
                <div className="field">
                    <label>Username<span className={`error ${usernameError}`}> :Username already in use</span></label>
                    <input type="text" name="username" value={`${username}`} onChange={(e)=>setUsername(e.target.value)} onFocus={()=>setUsernameError('hidden')} placeholder="Username" />
                </div>

                <div className="field">
                    <label>Password<span className={`error ${passwordError}`}>{` ${passwordErrorMessage}`}</span></label>
                    <input type="password" name="password" value={`${password}`} onChange={(e)=>setPassword(e.target.value)} onFocus={()=>setPasswordError('hidden')} placeholder="Password" />
                </div>

                <div className="field">
                    <label>Retype Password</label>
                    <input type="password" name="password2" value={`${passwordTwo}`} onChange={(e)=>setPasswordTwo(e.target.value)} placeholder="Retype Password" />
                </div>

                <div className="btn-div">
                    <button className="ui login button" type="submit">Create Account</button>
                </div>
                <div className={`error ${accountCreationError}`}>
                    Something went wrong: Try again
                </div>
            </form>
        </div>
    );
}
export default Register;