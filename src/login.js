import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let msg = ''

    const onSubmit = async (e) => {

        e.preventDefault();

        const body = {
            username: username,
            password: password
        }

        // eslint-disable-next-line no-unused-vars
        const login = await fetch('http://localhost:5000/auth', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(result => {
            console.table(result);
        })

        //window.location = '/';
    }
    return (
        <div>
            <form name="login" onSubmit={onSubmit} className="border">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required></input>
                <p></p>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <p>{msg}</p>
                <button type="submit">Login</button>
                <Link to="/">Cancel</Link>
                <p>Or</p>
                <Link to="/createAccount">Create an account</Link>
            </form>
        </div>
    )
}

export default LoginForm;