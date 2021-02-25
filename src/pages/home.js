import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Team from './components/team';
import Log from './components/logstat';
import URI from '../constance/URI';

const Home = () => {

    const [userStatus, setUserStatus] = useState('');

    const [allTeams, setAllTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [allUsers, setAllUsers] = useState([]);
    const [topPlayers, setTopPlayers] = useState([]);
    const [junglePlayers, setJunglePlayers] = useState([]);
    const [midPlayers, setMidPlayer] = useState([]);
    const [adcPlayers, setAdcPlayer] = useState([]);
    const [supportPlayers, setSupportPlayer] = useState([]);

    const teamListCreation = () => {

        setIsLoading(true);

        if (!isLoaded) {
            fetch(`${URI}/teams`)
                .then(teamsResponse => teamsResponse.json())
                .then(
                    teams => {

                        for (let i = 0; i < teams.length; i++) {
                            setAllTeams(allTeams => [...allTeams, teams[i]]);
                        }
                    }
                );

            fetch(`${URI}/users`)
                .then(usersResponse => usersResponse.json())
                .then(
                    users => {

                        for (let i = 0; i < users.length; i++) {
                            setAllUsers(allUsers => [...allUsers, users[i]]);
                            if (users[i].preferedrole === 'top') { setTopPlayers(topPlayers => [...topPlayers, users[i]]) };
                            if (users[i].preferedrole === 'jungle') { setJunglePlayers(junglePlayers => [...junglePlayers, users[i]]) };
                            if (users[i].preferedrole === 'mid') { setMidPlayer(midPlayers => [...midPlayers, users[i]]) };
                            if (users[i].preferedrole === 'adc') { setAdcPlayer(adcPlayers => [...adcPlayers, users[i]]) };
                            if (users[i].preferedrole === 'support') { setSupportPlayer(supportPlayers => [...supportPlayers, users[i]]) };

                            if (users[i].secondaryrole === 'top') { setTopPlayers(topPlayers => [...topPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'jungle') { setJunglePlayers(junglePlayers => [...junglePlayers, users[i]]) };
                            if (users[i].secondaryrole === 'mid') { setMidPlayer(midPlayers => [...midPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'adc') { setAdcPlayer(adcPlayers => [...adcPlayers, users[i]]) };
                            if (users[i].secondaryrole === 'support') { setSupportPlayer(supportPlayers => [...supportPlayers, users[i]]) };
                        }
                    }
                );

            setIsLoaded(true);

        }

        setIsLoading(false);
    }

    //check auth token if available
    const bootup = async () => {
        if (window.sessionStorage.getItem('x-auth-token')) {
            const x_auth_token = window.sessionStorage.getItem('x-auth-token');
            await fetch(`${URI}/auth/decode`, {
                headers: { "x-auth-token": x_auth_token }
            }).then(res => res.json()).then(response => {
                if (response.status) setUserStatus(response.status)
            });
        }
    };

    useEffect(() => {
        teamListCreation();
        bootup();
    })

    return (
        <div>
            {isLoading && <div>Page is loading</div>}
            <nav className="navflexBox">
                {userStatus && <Link to="/createTeam" className="navFlex">Create a Team</Link>}
                <Link to="/members" className="navFlex">League Members</Link>
                {!userStatus && <p className="navFlex"></p>}
                {!userStatus && <p className="navFlex"></p>}
                {userStatus && <Link to="/accountEdit" className="navFlex">Account</Link>}
                <Log userStatus={userStatus} />
            </nav>
            <section>
                <h2>Current Teams</h2>
                {allTeams.map(allTeams => (
                    <Team key={allTeams.teamname}
                        update={false}
                        change={false}
                        allTeams={allTeams}
                        userStatus={userStatus}
                        allUsers={allUsers}
                        topPlayers={topPlayers}
                        junglePlayers={junglePlayers}
                        midPlayers={midPlayers}
                        adcPlayers={adcPlayers}
                        supportPlayers={supportPlayers} />
                ))}
            </section>
        </div>
    )
}

export default Home;