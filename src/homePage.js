import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Teams from './teams';
import Schedule from './schedule';
import Account from './account';
import Login from './login';
import CreateAccount from './createAccount';
import CreateTeam from './createTeam';
import Members from './members';

export default function homePage() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <nav>
                            <div className="flexBox">
                                <Link to="/teams" className="flex">Teams</Link>
                                <Link to="/schedule" className="flex">Schedules</Link>
                                <Link to="/accountEdit" className="flex">Account</Link>
                                <Link to="/login" className="flex">Login</Link>
                            </div>
                        </nav>
                        <h2>Needs to be worked on!</h2>
                        <h2>Upcoming Games!</h2>
                        <div className="border">
                            <div className="flexBox">
                                <div className="flex">
                                    <h2>TNP</h2>
                                </div>
                                <h4 className="flex">VS</h4>
                                <div className="flex">
                                    <h2>BSG</h2>
                                </div>
                            </div>
                            <h4>Date: Janurary 15, 2021 @ 06:00pm cst</h4>
                        </div>
                    </Route>
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/createTeam">
                        <CreateTeam />
                    </Route>
                    <Route path="/members">
                        <Members />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
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