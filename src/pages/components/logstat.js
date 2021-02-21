import React from 'react';
import { Link } from 'react-router-dom';

export default class Log extends React.Component {

    logout = () => {
        window.sessionStorage.clear('x-auth-token');
    }

    render() {
        return (
            <div className="navFlex">
                {!this.props.userStatus && <Link to="/login">Login</Link>}
                {this.props.userStatus && <Link to="/login" onClick={() => { this.logout() }}>Logout</Link>}
            </div>
        )
    }
}