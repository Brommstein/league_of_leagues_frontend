import React from 'react';
import { Link } from 'react-router-dom';

export default function loginForm() {
    return (
        <div>
            <form action="loginUser" className="border">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" required></input>
                <p></p>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" required></input>
                <p></p>
                <button type="button">Login</button>
                <Link to="/">Cancel</Link>
                <p>Or</p>
                <Link to="/createAccount">Create an account</Link>
            </form>
        </div>
    )
}