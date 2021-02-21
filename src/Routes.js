import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Account from './pages/account';
import Login from './pages/login';
import CreateAccount from './pages/createAccount';
import CreateTeam from './pages/createTeam';
import Members from './pages/members';

export default function homePage() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/createTeam">
                        <CreateTeam />
                    </Route>
                    <Route path="/members">
                        <Members />
                    </Route>
                    <Route path="/accountEdit">
                        <Account />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/createAccount">
                        <CreateAccount />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}