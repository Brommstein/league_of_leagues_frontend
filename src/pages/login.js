import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import URI from '../constance/URI';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const [usernamelogged, setUsernameLogged] = useState('');

    const onSubmit = async (e) => {

        e.preventDefault();

        const body = {
            username: username,
            password: password
        }

        // eslint-disable-next-line no-unused-vars
        const login = await fetch(`${URI}/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(result => {
            window.sessionStorage.setItem('x-auth-token', result.token);
        })

        window.location = '/';
    };

    //check auth token if available
    const bootup = async () => {
        if (window.sessionStorage.getItem('x-auth-token')) {
            const x_auth_token = window.sessionStorage.getItem('x-auth-token');
            await fetch(`${URI}/decode`, {
                headers: { "x-auth-token": x_auth_token }
            }).then(res => res.json()).then(response => {
                setUserStatus(response.status);
                setUsernameLogged(response.name);
            });
        }
    };

    useEffect(() => {
        bootup();
    });

    return (
        <div className="border">
            {!userStatus && <div>
                <form name="login" onSubmit={onSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required></input>
                    <p></p>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                    <p></p>
                    <button type="submit">Login</button>
                    <Link to="/">Cancel</Link>
                    <p>Or</p>
                    <Link to="/createAccount">Create an account</Link>
                </form>
            </div>}
            {userStatus && <h2>Logged in as {usernamelogged}</h2>}
            {userStatus && <Link to="/">Home</Link>}
        </div>
    )
}

export default LoginForm;